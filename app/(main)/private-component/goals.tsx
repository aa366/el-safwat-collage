import React from "react";


interface goalsOBJ {
  name: string;
  text: string;
}
// this component used in about page
const Goals = () => {
  const goals: goalsOBJ[] = [
    {
      name: "Semester-Based Academic System:",
      text: "A structured format that promotes consistent learning and evaluation.",
    },
    {
      name: "custom",
      text: "",
    },
    {
      name: "University Requirements: ",
      text: " Life and work skills courses designed to prepare students for self-employment or career progression in public and private sectors.",
    },
    {
      name: "College Requirements:",
      text: "Core academic courses necessary to complete a Bachelor’s Degree.",
    },
    {
      name: "Course Integration: ",
      text: "Both horizontal and vertical alignment across courses to reinforce knowledge and skills.",
    },
  ];
  const subText =
  "To achieve its vision, the university follows a structured and progressive approach aimed at delivering high-quality education and empowering future leaders.";
  return (
    <section className="font-medium flex flex-col gap-2 px-4 lg:w-3/4 lg:mx-auto">
      <h3 className="header text-center border-x-8 border-green-800 min-w-fit w-1/5 mx-auto px-4">
        Our Goals
      </h3>

      <p className="text-gray-700">{subText}</p>
      <ul className="flex flex-col gap-1 pl-[7%] list-disc">
        {goals.map((ele) => {
          if (ele.name == "custom") {
            return (
              <li key={ele.name + ele.text} className="para">
                <span className="text-green-800">
                  {" "}
                  Diverse Degree Pathways:
                </span>
                Students can earn:
                <ul className="pl-[7%] list-[circle]">
                  <li>
                    {" "}
                    <span className="text-green-800">
                      {" "}
                      Bachelor’s Degree (Higher Diploma):
                    </span>
                    Aligned with college-specific requirements.
                  </li>
                  <li>
                    {" "}
                    <span className="text-green-800">
                      {" "}
                      Associate Degree (University Diploma):
                    </span>
                    Based on university-wide competencies.
                  </li>
                </ul>
              </li>
            );
          }

          return (
            <li key={ele.name + ele.text} className="para">
              <span className="text-green-800"> {ele.name}</span>
              {ele.text}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Goals;
