import React from "react";
import Image from "next/image";
import { LiaCalendar } from "react-icons/lia";
import { FaUserGraduate } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { PiGraduationCapFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";

const Banner = () => {
  const title = "safwat al-safwa international";
  const cTitle = "university";
  const p = "A Beacon for a Better Tomorrow";

  return (
    <div className="relative flex flex-col ">
        <div className="relative">
      <Image
        alt=""
        src={`/banner.webP`}
        width={1000}
        height={900}
        className="min-h-[300px] w-full"
        unoptimized={true}
        priority={true}
      />

      <div className="w-full h-full   absolute left-0 top-0 bg-[rgba(0,0,0,0.5)]  z-10 flex justify-center items-center">
        <div className="font-medium text-center">
          <h3 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl capitalize">
            {" "}
            {title}
            <span className="text-green-400">{" " + cTitle}</span>
          </h3>
          <h6 className="text-gray-200"> {p}</h6>
        </div>
      </div>
      </div>
<div className="flex justify-center bg-green-700 ">
      <div className="  md:static grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  p-3 w-max sm:w-full  bg-green-700   z-15  min-h-3 text-white  capitalize  font-medium md:flex-wrap md:gap-2 place-items-baseline" >
        {/* FaUserGraduate
   GrGroup
    PiGraduationCapFill
    FaHandshake
    */}
        <div className="flex  justify-center  items-center gap-1">
           <LiaCalendar className="text-5xl" />
            <div className="flex gap-2 self-center items-center ">
                <h3 className="text-3xl">5</h3>
                <h5 className="text-xl">the year founded</h5>
            </div>
            </div>
        <div className="flex  justify-center  items-center gap-1">
           <FaUserGraduate className="text-5xl" />
            <div className="flex gap-2 self-center items-center ">
                <h3 className="text-3xl">1000</h3>
                <h5 className="text-xl">students 2024</h5>
            </div>
            </div>
        <div className="flex  justify-center  items-center gap-1">
           <GrGroup className="text-5xl" />
            <div className="flex gap-2 self-center items-center ">
                <h3 className="text-3xl">300</h3>
                <h5 className="text-xl">staff</h5>
            </div>
            </div>
        <div className="flex  justify-center  items-center gap-1">
           <PiGraduationCapFill className="text-5xl" />
            <div className="flex gap-2 self-center items-center ">
                <h3 className="text-3xl">500</h3>
                <h5 className="text-xl">alummi</h5>
            </div>
            </div>
        <div className="flex  justify-center items-center gap-1">
           <FaHandshake className="text-5xl" />
            <div className="flex gap-2 self-center items-center ">
                <h3 className="text-3xl">150</h3>
                <h5 className="text-xl">partners</h5>
            </div>
            </div>


            
      </div>
      </div>

    </div>
  );
};

export default Banner;
