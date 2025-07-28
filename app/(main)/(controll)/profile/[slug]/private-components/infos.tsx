"use client";
import React, { useEffect, useRef, useState } from "react";
import { liteStore } from "@/firebase/config";
import { getDoc, doc } from "firebase/firestore/lite";
import { useParams } from "next/navigation";
import Image from "next/image";
import { User } from "@/app/interfaces";
import { isRtlLang } from "rtl-detect";

const Infos = () => {
  const trans = {
    role: {
      itself: "Role : ",
      student: "student",
      teacher: "teacher",
      moderator: "moderator",
      admin: "admin",
      member: "member",
    },
    grade: {
      itself: "Grade : ",
      not: "Not Registered",
    },
    joined: {
      itself: "joined : ",
    },
    addtional: {
      itself: "Additional Information",
      noMore: "NO Mor User Informations",
      unAvailable: "No user data available",
    },
  };
  const params = useParams();
  const slug = params.slug as string;
  const [data, setData] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const joinDateRef = useRef<string | null>(null);

  const formatJoinDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "numeric",
    }).format(date);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!slug) {
          throw new Error("No user ID provided");
        }

        setLoading(true);
        const docRef = doc(liteStore, "users", slug);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          throw new Error(`User with ID ${slug} not found`);
        }

        const userData = docSnap.data() as User;
        if (userData.joinAt) {
          joinDateRef.current = formatJoinDate(userData.joinAt.toDate());
        }
        if (!userData.arabicName) {
          userData.arabicName = userData.name;
        }

        setData(userData);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const handleCopySlug = async () => {
    try {
      await navigator.clipboard.writeText(slug);
      //  add a toast or notification here later
    } catch (err) {
      console.error("Failed to copy UID:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-4">
        <p>{trans.addtional.unAvailable}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 md:w-1/3">
          <div className="flex flex-col items-center">
            <Image
              alt="profile pic"
              src={data.profileURL || "/default-user.svg"}
              width={200}
              height={200}
              loading="lazy"
              className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover mb-4"
            />

            <h2 className="text-xl font-bold text-center">
              {!isRtlLang ? data.arabicName : data.name}
            </h2>

            <div className="mt-4 space-y-2 w-full">
              <p className="flex justify-between">
                <span className="font-medium">{trans.role.itself}</span>
                <span>{trans.role[data.role]}</span>
              </p>

              <p className="flex justify-between">
                <span className="font-medium">{trans.grade.itself}</span>
                <span>{data.grade || trans.grade.not}</span>
              </p>

              <p className="flex justify-between items-center">
                <span className="font-medium">UID:</span>
                <button
                  onClick={handleCopySlug}
                  className="text-blue-600 hover:text-blue-800 active:scale-95 transition-transform  text-sm"
                  title="Copy to clipboard "
                >
                  {data.uid.slice(0, data.uid.length / 2)}...
                </button>
              </p>

              {joinDateRef.current && (
                <p className="flex justify-between">
                  <span className="font-medium">{trans.joined.itself}</span>
                  <span>{joinDateRef.current}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex-1 flex flex-col gap-2">
          {data.bio ? (
            <div className=" p-3 bg-gray-200 dark:bg-gray-700 rounded max-h-40 overflow-y-auto">
              <p className="whitespace-pre-line">{data.bio}</p>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold ">
                {trans.addtional.itself}
              </h3>
              <p>{trans.addtional.unAvailable}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Infos;
