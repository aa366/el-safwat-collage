import React from "react";
import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const Benefits = async () => {
   const t = await getTranslations("pages.admission.Benefits")
  const data = {
    title: t.raw("title"),
    ctitle: t.raw("ctitle"),
    para: t.raw("para"),
    values:t.raw("values")
  };
  return (
    <section className="font-medium p-4 flex flex-col gap-4">
      <h3 className="header">
        {data.title} <span className="text-green-800">{" " + data.ctitle}</span>
      </h3>
      <p className="para text-gray-600">{data.para}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        <Accordion
          defaultValue="item-0"
          type="single"
          collapsible
          className=" w-full flex flex-col gap-2 "
        >
          {data.values.map((ele, index) => {
            if (index > data.values.length / 2) {
              return;
            }
            return (
              <AccordionItem
                key={ele.ans + ele.ques}
                value={`item-${index}`}
                className=" border-1  border-gray-600 px-4 shadow-md"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45 text-[1.2rem]">
                    {ele.ques}
                    <Plus className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="border-t-1 border-gray-600 text-gray-700 text-[1rem]">{ele.ans}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <Accordion
          defaultValue="item-0"
          type="single"
          collapsible
          className="w-full flex flex-col gap-2  "
        >
          {data.values.map((ele, index) => {
            if (index < data.values.length / 2) {
              return;
            }
            return (
              <AccordionItem
                key={ele.ans + ele.ques}
                value={`item-${index}`}
                className="border-1 border-gray-600 px-4 shadow-md"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45  text-[1.2rem]">
                    {ele.ques}
                    <Plus className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="border-t-1 border-gray-600 text-gray-700 text-[1rem]">
                  {ele.ans}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Benefits;
