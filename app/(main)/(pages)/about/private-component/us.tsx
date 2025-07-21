"use client";
import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

// Types
interface Item {
  name: string;
  href: string;
}
interface ValueData {
  name: string;
  text: string;
}
interface Value {
  title?: string;
  href?: string;
  description?: string;
  data?: ValueData[];
  custom?: boolean;
}

const Goals = dynamic(() => import("@/app/(main)/private-component/goals"), { ssr: false });

const Us = () => {
  const t = useTranslations("pages.about.Us");
  const data = {
    items: t.raw("items") as Item[],
    values: t.raw("values") as Value[],
  };
  const [activeTab, setActiveTab] = useState(data.items[0].href);

  return (
    <section>
      <nav className="grid grid-cols-2 md:grid-cols-5 w-full lg:w-fit  gap-2 flex-wrap mx-auto px-2 pb-4">
        {data.items.map((ele, idx) => (
          <button
            key={ele.href + idx}
            className={` bg-gray-300 text-green-800  p-4 para  font-bold transition-all duration-200 ${
              ele.href == activeTab && "!bg-black text-white"
            }`}
            onClick={() => setActiveTab(ele.href)}
          >
            {ele.name}
          </button>
        ))}
      </nav>

      <div className="font-medium  px-4 lg:w-3/4 lg:mx-auto md:border-t-[.5rem] pt-4 flex flex-col gap-2 border-green-800 ">
        {(() => {
          const currentData = data.values.find(
            (thing) => thing.href === activeTab || (thing.custom && activeTab === "Our Goals")
          );

          if (!currentData) return null;

          if (currentData.custom) {
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <Goals key="goals-tab" />
              </Suspense>
            );
          }

          return (
            <section
              key={currentData.href}
              className="font-medium flex flex-col gap-2 px-4 lg:w-11/12 lg:mx-auto"
            >
              <h3 className="header text-center border-x-8 border-green-800 min-w-fit w-1/5 mx-auto px-4">
                {currentData.title}
              </h3>
              <p className="text-gray-600 para">{currentData.description}</p>
              <ul className="flex flex-col gap-1 para list-disc pl-4">
                {currentData.data &&
                  currentData.data.map((thing, idx) => (
                    <li key={thing.name + thing.text + idx}>
                      <span className="text-green-800">{thing.name + " : "}</span>
                      {thing.text}
                    </li>
                  ))}
              </ul>
            </section>
          );
        })()}
      </div>
    </section>
  );
};

export default Us;
