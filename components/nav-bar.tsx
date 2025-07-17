"use client"
import React from "react";
import ClientNav from "./elements/clientNav";
import Signup from "./sign-up";

const NavBar = () => {
  const tel = "+1 (646) 710-0836";
  const formatTel = "+16467100836";
  const mail = "saalsa123456@gmail.com";
  return (
    <nav>
      <div className="flex p-3  border-b-1 border-gray-400 justify-center md:justify-between">

        <div className=" gap-2 font-medium hidden md:flex lg:items-center ">
           <h3 className="hidden lg:block">Information for:</h3>
          <div className="flex gap-2  ">
           
            <a href="mailto:saalsa123456@gmail.com" className="text-gray-700">
              Email:{" " + mail}
            </a>
            <a href={`tel:${formatTel}`} className="text-gray-700">
              WhatsApp: {" " + tel}
            </a>{" "}
          </div>
        </div>

        <div className="text-black flex gap-2">
          <button>Register</button>
          <button className="border-x-1 border-gray-600 px-2">Login</button>
          <button>en</button>
        </div>
      </div>
      <Signup />

      
      <ClientNav />
    </nav>
  );
};

export default NavBar;
