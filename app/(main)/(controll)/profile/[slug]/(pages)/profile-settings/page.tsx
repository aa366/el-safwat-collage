"use client";
import React, { useEffect, useRef, useState } from "react";
import { liteStore, auth } from "@/firebase/config";
import { getDoc, doc } from "firebase/firestore/lite";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { User } from "@/app/interfaces";
import { User as authUser } from "firebase/auth";
import { useGetIsRTL } from "@/i18n/rtl-detections";

const Page = () => {
  const trans = {
    error: {
      nothingHeader: " There is No Requests ",
      nothingPara: "",
      notFound: "Not Set yet",
    },
    msg: {
      dataUnAvailabe: "No data Available at the moment",
    },
    buttons: [
      { name: "infos", href: "infos" },
      { name: "sign out", href: "signout" },
    ],
    infos: {
      name: "name",
      birthDate: "birthDate",
      joinAt: "joinAt",
      role: "role",
      bio: "bio",
      grade: "grade",
      arabicName: "arabicName",
      email: "email",
    },
  };

  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [data, setData] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<authUser | null>(null);
  const [active, setActive] = useState("infos");

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

  const formatJoinDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "numeric",
    }).format(date);
  };
  const Infos = () => {
    const list = [
      {name:trans.infos.name,info:data.name || trans.error.notFound},
      {name:trans.infos.arabicName ,info:data.arabicName || trans.error.notFound },
      // {name:trans.infos.bio ,info: data.bio || trans.error.notFound},
      // {name: trans.infos.birthDate,info: formatJoinDate(data.birthDate?.toDate()) || trans.error.notFound},
      {name: trans.infos.email,info:data.email || trans.error.notFound },
      {name:trans.infos.grade ,info:data.grade || trans.error.notFound },
      {name:trans.infos.joinAt ,info:formatJoinDate(data.joinAt?.toDate()) || trans.error.notFound },
      {name: trans.infos.role,info:data.role },


    ]
    const isRTL = useGetIsRTL()
   
 return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full">
  {
    list.map((ele)=>{

      return (
         <h3 className={`para ${isRTL && "text-blue-700 flex flex-row-reverse"}`} key={ele.info + ele.name}>
          <span>{ele.name}</span> :{" "}
          <span>{ele.info}</span>{" "}
        </h3>
      )
    })
  }
  
  </div>
 )
  };
  const Edit = () => {
    return <></>;
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 md:w-1/4">
          <div className="flex flex-col items-center">
            {trans.buttons.map((ele) => {
              if (ele.href == "signout") {
                return (
                  <button
                    key={ele.href + "button Switcher"}
                    className={`w-1/2 mt-2 p-2 para bg-red-400 hover:bg-red-700  hover:text-white active:scale-95 cursor-pointer `}
                    onClick={() => auth.signOut()}
                  >
                    {ele.name}
                  </button>
                );
              }
              return (
                <button
                  key={ele.href + "button Switcher"}
                  className={`w-full p-2 para ${
                    active == ele.href
                      ? "bg-green-200"
                      : "bg-gray-200 hover:bg-gray-300 active:scale-95 cursor-pointer"
                  } `}
                  onClick={() => setActive(ele.href)}
                >
                  {ele.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex-1 flex flex-col gap-2">
          {active == "infos" && <Infos />}
          {active == "edit" && <Edit />}
        </div>
      </div>
    </div>
  );
};

export default Page;
