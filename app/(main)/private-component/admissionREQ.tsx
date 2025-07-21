import React from "react";
import Card from "@/components/elements/imgCard";
import { getTranslations } from "next-intl/server";

interface typeData {
  link: string;
  img: string;
  text: string;
}
const Requirements = async () => {
  const t = await getTranslations("pages.home.admissionREQ")
 
  const title = t.raw("title");
  const cTitle = t.raw("cTitle");
  const sub  = t.raw("sub");
  const data =  t.raw("data") as typeData[] 

  return (
    <section className={`"font-medium flex flex-col gap-2  items-center `}>
      <div className=" flex flex-col gap-2  items-center px-8">
        <h3 className="header text-center   border-x-8 border-green-800   px-4">
          {title}
          <span className="text-green-800">{" " +cTitle}</span>
        </h3>
        <p className="text-gray-700 ">{sub}</p>
      </div>
      <div className=" w-full  md:px-[3%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {data.map(({ img, text, link }, idx) => {
          return (
            <Card
              key={link + text + img + idx}
              img={img}
              link={link}
              text={text}
              textContClass="text-[1rem]"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Requirements;
