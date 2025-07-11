import React from "react";
import Card from "@/components/elements/imgCard";

interface typeData {
  link: string;
  img: string;
  text: string;
}
const Requirements = () => {
  const title = "Admission";
  const cTitle = "Requirements";
  const sub ="To be admitted to Safwat Al-Safwa International University, applicants must:";
  const data: typeData[] = [
    {
      text: "Hold a valid secondary school certificate.",
      link: "/admission",
      img: "/toWEBP/Hold.webP",
    },
    {
      text: "Pass the university's entrance exams.",
      link: "/admission",
      img: "/toWEBP/Pass.webP",
    },
    {
      text: "Meet specific requirements set by the intended college.",
      link: "/admission",
      img: "/toWEBP/Meet.webP",
    },
    {
      text: "Obtain official approval from the university administration.",
      link: "/admission",
      img: "/toWEBP/Obtain.webP",
    },

  ];

  return (
    <section className="font-medium flex flex-col gap-2  items-center">
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
