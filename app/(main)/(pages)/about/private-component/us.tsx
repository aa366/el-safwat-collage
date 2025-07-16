"use client";
import { useState } from "react";
import Goals from "@/app/(main)/private-component/goals";

const Us = () => {
  const data = {
    items: [
      "Our Core Principles",
      "Our Core Values",
      "Our Vision",
      "Our Mission",
      "Our Goals",
    ],
    values: [
      {
        title: "Our Core Principles",
        description:
          "At Safwat Al-Safwa International University, our mission is guided by a set of core principles that reflect our values, purpose, and unwavering commitment to academic and ethical excellence.",
        data: [
          {
            name: "Ethical Values",
            text: "Upholding strong moral principles and integrity in all aspects of university life.",
          },
          {
            name: "Human Dignity",
            text: "Promoting digital learning and distance education to expand access and flexibility.",
          },
          {
            name: "Self-Learning",
            text: " Emphasizing self-directed study and collaborative educational approaches.",
          },
          {
            name: "E-Learning",
            text: "Promoting digital learning and distance education to expand access and flexibility.",
          },
          {
            name: "Excellence in Education",
            text: "Delivering top-quality academic programs and pioneering research to graduate competent, distinguished individuals.",
          },
          {
            name: "Leadership Development",
            text: "Building leadership, management, and communication skills for future leaders.",
          },
          {
            name: "Lifelong Learning",
            text: " Providing ongoing training for graduates and the broader community to keep pace with evolving knowledge and industry needs.",
          },
          {
            name: "Privacy and Confidentiality",
            text: " Safeguarding personal and institutional data with care and responsibility.",
          },
          {
            name: "Academic Excellence",
            text: " Ensuring high standards in both academic teaching and research outputs.",
          },
          {
            name: "Intellectual Freedom",
            text: "Encouraging critical thinking, creativity, and free academic exploration.",
          },
          {
            name: "Community Empowerment",
            text: "Preparing professionals who serve and uplift their communities.",
          },
          {
            name: "Communication Skills",
            text: "Enhancing writing, negotiation, and interpersonal abilities.",
          },
          {
            name: "Innovation",
            text: " Fostering innovation in learning, teaching, and problem-solving.",
          },
        ],
      },
      {
        title: "Our Core Values",
        description:
          "At Safwat Al-Safwa International University, our mission is grounded in a set of core values that reflect our deep commitment to faith, knowledge, ethics, and community service.",
        data: [
          {
            name: "Faith and Reliance",
            text: "Faith in God and reliance on Him in all our actions and decisions.",
          },
          {
            name: "Faith and Reliance",
            text: "Faith in God and reliance on Him in all our actions and decisions.",
          },
          {
            name: "Moral Conduct",
            text: " Practicing good manners and upholding high moral values.",
          },
          {
            name: "Human Rights",
            text: "Respecting and protecting the rights and dignity of every individual.",
          },
          {
            name: "Comprehensive Education",
            text: "Providing distinguished and inclusive vocational education.",
          },
          {
            name: "Excellence",
            text: "Pursuing excellence in education, research, and service.",
          },
          {
            name: "Scientific Engagement",
            text: "Active involvement in basic sciences and meaningful research.",
          },
        ],
      },
      {
        title: "Our Vision",
        description:
          "We envision a modern academic environment that leads in innovation, education, and sustainable development. At Safwat Al-Safwa International University, we are committed to becoming a global leader by pursuing the following goals:",
        data: [
          {
            name: "Accessible Education",
            text: "Championing e-learning and distance education as inclusive tools for all learners.",
          },
          {
            name: "Leadership Development",
            text: "Becoming a hub for outcome-based learning to empower future local, regional, and global leaders.",
          },
          {
            name: "Market-Driven Programs",
            text: "Continuously upgrading academic programs to align with labor market demands.",
          },
          {
            name: "Graduate Excellence",
            text: "Producing highly qualified and competitive graduates equipped for success.",
          },
          {
            name: "Innovative Curriculum",
            text: "Developing advanced, forward-thinking educational programs.",
          },
        ],
      },
      {
        title: "Our Mission",
        description:
          "Safwat Al-Safwa International University is dedicated to transforming lives through excellence in education, innovative research, and meaningful service. Our mission is to create impactful learning experiences and empower future generations by focusing on the following objectives:",
        data: [
          {
            name: "E-Learning Leadership",
            text: "Advancing digital and distance education across all academic disciplines.",
          },
          {
            name: "Modern Learning Models",
            text: "Prioritizing self-directed and collaborative learning approaches.",
          },
          {
            name: "Academic Excellence",
            text: "Delivering distinguished, high-quality education and pioneering research.",
          },
          {
            name: "Leadership Development",
            text: "Strengthening leadership, administration, and strategic capabilities.",
          },
          {
            name: "Lifelong Learning",
            text: "Providing continuous development opportunities for graduates and adult learners.",
          },
        ],
      },
      { custom: true, title: "goals" },
    ],
  };
  const [activeTab, setActiveTab] = useState(data.items[0]);

  return (
    <section>
      <nav className="grid grid-cols-2 md:grid-cols-5 w-full lg:w-fit  gap-2 flex-wrap mx-auto px-2 pb-4">
        {data.items.map((ele, idx) => {
          return (
            <button
              key={ele + idx}
              className={` bg-gray-300 text-green-800  p-4 para  font-bold transition-all duration-200 ${
                ele == activeTab && "!bg-black text-white"
              }`}
              onClick={() => setActiveTab(ele)}
            >
              {ele}
            </button>
          );
        })}
      </nav>

      <div className="font-medium  px-4 lg:w-3/4 lg:mx-auto md:border-t-[.5rem] pt-4 flex flex-col gap-2 border-green-800 ">
        {(() => {
          const currentData = data.values.find(
            (thing) => thing.title === activeTab || (thing.custom && activeTab === "Our Goals")
          );

          if (!currentData) return null;

          if (currentData.custom) {
            return <Goals key="goals-tab" />;
          }

          return (
            <section
              key={currentData.title}
              className="font-medium flex flex-col gap-2 px-4 lg:w-11/12 lg:mx-auto"
            >
              <h3 className="header text-center border-x-8 border-green-800 min-w-fit w-1/5 mx-auto px-4">
                {currentData.title}
              </h3>
              <p className="text-gray-600 para">{currentData.description}</p>
              <ul className="flex flex-col gap-1 para list-disc pl-4">
                { currentData.data && currentData.data.map((thing, idx) => (
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
