import React from "react";

import { LiaCalendar } from "react-icons/lia";
import { FaHandshake, FaUserGraduate } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { PiGraduationCapFill } from "react-icons/pi";
import { IconType } from "react-icons";
import { getTranslations } from "next-intl/server";
interface NowObj {
  icon: IconType;
  num: number | string;
  text: string;
}
const Statstics =async  () => {
  const t = await getTranslations("pages.about.Statstics")

  const data: NowObj[] = [
    {
      icon: LiaCalendar,
      text:  t("year") ,
      num: 5,
    },
    {
      icon: FaUserGraduate,
      text:t("students")  ,
      num: "1000",
    },
    {
      icon: GrGroup,
      text:t("staff")  ,
      num: "300",
    },
    {
      icon: PiGraduationCapFill,
      text:t("alummi")  ,
      num: "500",
    },
    {
      icon: FaHandshake,
      text:t("partners")  ,
      num: "150",
    },
  ];

  return (
    <section className="flex justify-center ">
        
      <div className="  md:static grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  p-3 w-max sm:w-full    z-15  min-h-3 capitalize  font-medium md:flex-wrap md:gap-2 place-items-baseline">
        {data.map(({ icon, num, text }, idx) => {
          return (
            <div
              key={text + num + idx}
              className="flex  flex-col text justify-center  items-center gap-1 bg-white shadow-sm w-full  h-full p-4 border-2"
            >
              {React.createElement(icon, { className: "text-5xl text-gray-700" })}
              <div className="flex flex-col gap-2 self-center items-center ">
                <h3 className="text-3xl">{num}</h3>
                <h5 className="text-xl text-center">{text}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Statstics;
