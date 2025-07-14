import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Asks = () => {
  const data = {
    title: "",
    values: [
      {
        faculty: "Faculty of Medicine",
        pre: "Medical students study college-required courses for a Bachelor of Medicine degree and university-required courses for an Associate's degree. The college focuses on:",
        aft: "",
        items: [
          "",
          "Medical ethics, patient rights, and disease prevention",
          "Patient care and healthcare delivery methods",
          "Chemical and biological processes in living organisms",
          "Disease diagnosis and treatment",
          "Medical confidentiality, data analysis, and clinical trials",
          "Scientific research in medicine",
          "Commitment to excellence, patient well-being, and community health needs",
          "Promoting research and global community engagement",
          "Respect for human rights",
        ],
      },
      {
        faculty: "Faculty of Dentistry",
        pre: "Students study college-required courses for a bachelor's degree and university-required courses for an associate's degree. The college emphasizes:",
        aft: "",
        items: [
          "",
          " Medical ethics, patient rights, and disease prevention",
          "Patient care, healthcare delivery, and biological chemistry",
          "Dental structure and functions, microorganisms in the mouth",
          "Diagnosis, treatment of dental and periodontal diseases",
          "Dental surgery, orthodontics, and clinical diagnostics",
          "Scientific research, clinical trials, and data analysis in dentistry",
          "Collaboration, community engagement, and human rights",
        ],
      },
      {
        faculty: "Faculty of Medical Sciences",
        pre: "",
        aft: "The faculty focuses on practical training, scientific research, and community service.",
        items: [
          "",
          "Nursing: Training in various nursing disciplines",
          "Medical Laboratories: Expertise in lab sciences",
          "Radiology: Producing qualified radiologists",
          "Physiotherapy: Preparing skilled physiotherapy professionals",
        ],
      },
    ],
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
