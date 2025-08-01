import React from "react";
import { FaCheck } from "react-icons/fa";
import { getTranslations } from "next-intl/server";

const WhyStudy = async () => {
   const t = await getTranslations("pages.home.WhyStudy")

  const title = t.raw("title")
  const cTitle= t.raw("cTitle")
  const subTitle = t.raw("subTitle")
  const data = t.raw("data") as string[]


 
  return (
    <section className="font-medium flex flex-col gap-2 px-4 lg:w-3/4 lg:mx-auto">

      <h3 className="header text-center border-x-8 border-green-800 min-w-fit w-1/5 mx-auto px-4">
        {title} <span className="text-green-800"> {cTitle}</span>
      </h3>


      <p className="text-gray-700 mx-auto px-4">{subTitle}</p>

      <ul className="flex flex-col gap-2 w-fit self-center justify-center md:-translate-x-[10%] ">
        {data.map((ele)=>{

          return(
            <li key={ele} className="text-green-800 flex gap-2  items-center w-fit">

                <FaCheck className="header min-w-[min(20px,20%)] "/>

           <h3 className="leading-none text-xl md:text-2xl lg:text-3xl"> {ele}</h3>
            </li>
          )
        })}
      
      </ul>
    </section>
  );
};

export default WhyStudy;
