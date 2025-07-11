import React from "react";
import { FaCheck } from "react-icons/fa";

const WhyStudy = () => {
  const title = "Why Study at Safwat"
  const cTitle= "Al-Safwa"
  const subTitle = "Key benefits of studying at our university include:"
  const data = [
"Earning an accredited academic degree.",
"Enhancing skills and competencies.",
"Expanding job opportunities.",

"Personal growth through critical and creative thinking.",
    "Contributing to and serving the community."

  ]


 
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
