"use client"
import React from "react";
import ClientNav, { UserState } from "./elements/clientNav";


const NavBar = () => {
  const tel = "+1 (646) 710-0836";
  const formatTel = "+16467100836";
  const mail = "saalsa123456@gmail.com";
  return (
    <nav>
      <div className="flex p-3  border-b-1 border-gray-400 justify-between">

        <div className=" gap-2 font-medium  flex items-center ">
           <h3 className="hidden lg:block">Information for:</h3>
          <div className="flex gap-2  ">
           
            <a href="mailto:saalsa123456@gmail.com" className="text-gray-700 hidden md:block">
              Email:{" " + mail}
            </a>
            <a href={`tel:${formatTel}`} className="text-gray-700">
              WhatsApp: {" " + tel}
            </a>{" "}
          </div>
        </div>

        <div className="text-black flex gap-2">
         <UserState />
          <button>en</button>
        </div>
      </div>

      
      <ClientNav />
    </nav>
  );
};

export default NavBar;
