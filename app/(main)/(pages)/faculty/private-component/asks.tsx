import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTranslations } from "next-intl/server";

interface Shape{
    title: string;
    values: {
        faculty: string;
        pre: string;
        aft: string;
        items: string[];
    }[];
}

const Asks = async () => {
   const t = await getTranslations("pages.faculty.Asks")
  const data:Shape = {
    title: t("title"),
    values: t.raw("values")
  };
  return (
    <Accordion type="multiple" className="w-full  grid grid-cols-1 md:w-[80%] mx-auto p-2 gap-2 gap-x-4">
      {data.values.map((ele,idx) => {
        return (
          <AccordionItem value={`item-${idx}`} key={ele.faculty + ele.aft + ele.pre} className=" bg-gray-300 px-4 shadow-md">
            <AccordionTrigger  className="text-[1.5rem]">{ele.faculty}</AccordionTrigger>
            <AccordionContent className="text-[1rem] font-medium border-t-2 border-black md:text-[1.2rem] flex flex-col gap-2">
              {ele.pre && <p>{ele.pre} </p>}
              <ul className=" list-inside list-disc">
                {ele.items.map((item) => item && <li key={item}>{item}</li>
                  
                )}
              </ul>
              {ele.aft && <p>{ele.aft} </p>}
            </AccordionContent>
          </AccordionItem>
        );
      })}
     
    </Accordion>
  );
};

export default Asks;
