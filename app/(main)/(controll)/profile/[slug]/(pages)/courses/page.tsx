"use client";
import React, { useEffect, useRef, useState } from "react";
import { liteStore, auth } from "@/firebase/config";
import { getDoc, doc } from "firebase/firestore/lite";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { User } from "@/app/interfaces";
import { User as authUser } from "firebase/auth";
import { isRtlLang } from "rtl-detect";

const Page = () => {
  const trans = {
    error:{
      nothingHeader:"Nothing Added Yet",
      nothingPara:""
    },
    msg: {
      dataUnAvailabe: "No data Available at the moment",
    },
    buttons: [
      { name: "All", href: "all" },
      { name: "paid", href: "paid" },
      { name: "favorite", href: "favorite" },
      { name: "published", href: "published" },
    ],
  };

  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [data, setData] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<authUser | null>(null);
  const [active,setActive] = useState("all") 

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
        if (auth.currentUser?.uid != slug) {
          router.back();
        }
        setUser(auth.currentUser);

        if (!userData.arabicName) {
          userData.arabicName = userData.name;
        }

        setData(userData);
        console.log(userData, auth.currentUser);
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
  }, [slug, router]);

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
        <p>{trans.msg.dataUnAvailabe}</p>
      </div>
    );
  }

  const Courses = () => {

    return (
    <>
    {data.courses? (
     <>
     

     </>

    ):
    (
      <>
      <h3 className="para">{trans.error.nothingHeader}</h3>
      {trans.error.nothingPara && <p>{trans.error.nothingPara}</p>}
      </>
    )}

    </>
    );
  };



  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 md:w-1/4">
       <div className="flex flex-col items-center">
        {trans.buttons.map((ele) => {
          return (
            <button
              key={ele.href + "button Switcher"}
              className={`w-full p-2 para ${active==ele.href ? "bg-green-200" : "bg-gray-200 hover:bg-gray-300 active:scale-95 cursor-pointer"} `}
              onClick={()=> setActive(ele.href)}
            >
              {ele.name}
            </button>
          );
        })}
      </div>
   </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex-1 flex flex-col gap-2">
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default Page;
