import React from "react";
import { FaMapMarked } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Page = () => {
  const data = {
    values: [
      {
        icon: FaMapMarked,
        title: "Address way",
        color:{
            text:"text-blue-800",
            border:"hover:border-blue-800"
        },
        items: [""],
      },
      {
        icon: MdContacts,
        title: "Contact info",
          color:{
            text:"text-green-800",
            border:"hover:border-green-800"
        },
        items: ["Mobile: +1 (646) 710-0836", "Mail: saalsa123456@gmail.com"],
      },
      {
        icon: FaRegClock,
        title: "Work timer",
          color:{
            text:"text-yellow-800",
            border:"hover:border-yellow-800"
        },
        items: [
          "Monday - Friday: 09:00 - 20:00",
          "Sunday & Saturday: 10:30 - 22:0",
        ],
      },
    ],
  };
  return (
    <main className="my-[10%] gap-[10vh] flex flex-col">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6  md:w-10/12 mx-auto ">
        {data.values.map((ele) => {
          return (
            <div key={ele.title + ele.items} className={`flex justify-center items-center flex-col shadow-md p-4 gap-4 transition-all duration-300  ${ele.color.border}  border-b-4 `}>
              {React.createElement(ele.icon, { className: `text-[5rem] ${ele.color.text}` })}
              <h3 className="header">{ele.title}</h3>
              <ul className="para">
                {ele.items.map((item) => (
                  <li key={item} className="">{item} </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
      <section className="mx-auto w-fit h-fit">
        <a href="https://web.whatsapp.com/send?phone=16467100836&text=" aria-label="whatsapp link" className="w-full h-full">
        <FaWhatsapp className="text-[5rem]" />
        </a>
      </section>
    </main>
  );
};

export default Page;
