"use client";
import React from "react";
import { useTranslations } from "next-intl";

interface Goal {
  name: string;
  text: string;
}
interface CustomArr {
  name: string;
  text: string;
}
interface Custom {
  name: string;
  text: string;
  arr: CustomArr[];
}

const Goals = () => {
  const t = useTranslations("pages.home.Goals");
  const title = t.raw("title") as string;
  const goals = t.raw("goals") as Goal[];
  const custom = t.raw("custom") as Custom;
  const subText = t.raw("subText") as string;

  return (
    <section className="font-medium flex flex-col gap-2 px-4 lg:w-3/4 lg:mx-auto">
      <h3 className="header text-center border-x-8 border-green-800 min-w-fit w-1/5 mx-auto px-4">
        {title}
      </h3>
      <p className="text-gray-700">{subText}</p>
      <ul className="flex flex-col gap-1 pl-[7%] list-disc">
        {goals.map((ele) => {
          if (ele.name === "custom") {
            return (
              <li key={ele.name + ele.text} className="para">
                <span className="text-green-800">{custom.name}</span>
                {custom.text}
                <ul className="pl-[7%] list-[circle]">
                  {custom.arr.map((item, idx) => (
                    <li key={item.name + item.text + idx}>
                      <span className="text-green-800">{item.name}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          return (
            <li key={ele.name + ele.text} className="para">
              <span className="text-green-800">{ele.name}</span>
              {ele.text}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Goals;
