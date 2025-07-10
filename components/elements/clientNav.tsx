"use client";
import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";


const ClientNav = () => {
  const logo = "logo.png";
  const ulItems = [
    "home",
    "about",
    "admission",
    "faculty",
    "institutes",
    "e-learning",
    "contact",
  ];
  const path = usePathname()
  const activeTab = path;
  console.log(activeTab);
  


  return (
    <div className="w-full flex justify-between px-3 md:p-0">
      <Image
        width={100}
        height={100}
        alt="Safwat University"
        src={logo}
        className="w-[60vw] md:w-[30vw] "
        unoptimized={true}
        priority= {true}
      />
      <button className="">
        <FaBars className="w-full h-full text-2xl sm:text-3xl md:hidden" />
      </button>
      <div className="fixed"></div>
      <ul className="hidden md:flex w-auto gap-2 mdl:gap-4 mdl:text-xl lg:text-[1.3rem] items-center pr-3 text-lg font-medium ">
        {ulItems.map((text) => {
          return (
            <li key={text+"rand"} className={text==activeTab?"text-green-800":""}>
              <Link className="w-full h-full capitalize" href={text=="home"?`/`:`/${text}`}>
                {text}
              </Link>
            </li>
          );
        })}
      
      </ul>
    </div>
  );
};

export default ClientNav;
