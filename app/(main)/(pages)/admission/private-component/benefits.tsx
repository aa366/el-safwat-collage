import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const Benefits = () => {
  const data = {
    title: "Benefits of Studying at the",
    ctitle: "University",
    para: "At Safwat Al-Safwa International University, students gain more than just academic knowledge—they experience personal and professional growth that prepares them for success in a rapidly evolving world. By joining our academic community, students benefit from:",
    values: [
      {
        ques: "Earning an internationally recognized academic degree",
        ans: "Open doors to global opportunities with qualifications respected by institutions and employers worldwide.",
        open: true,
      },
      {
        ques: "Developing essential skills and competencies",
        ans: "Gain practical, in-demand skills that empower you to excel in your chosen field.",
      },
      {
        ques: "Access to better job opportunities",
        ans: "Increase your employability and access a wider range of career opportunities.",
      },
      {
        ques: "Enhancing personal growth through critical and creative thinking",
        ans: "Sharpen your critical thinking, creativity, and problem-solving abilities in an environment that encourages innovation.",
        open: true,
      },
      {
        ques: "Contributing to community development",
        ans: "Become an active contributor to society through knowledge, service, and leadership.",
      },
    ],
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
