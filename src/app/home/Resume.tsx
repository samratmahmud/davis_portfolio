import Title from "@/components/common/Title";
import React from "react";

const resumeItems = [
  {
    icon: "/images/resume-icon1.png",
    headline: "Education",
    details: [
      {
        title: "Master of Computer Science",
        date: "2015 - 2016",
        subTitle: "University of XYZ",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
      },
      {
        title: "Bachelor of Computer Science",
        date: "2010 - 2014",
        subTitle: "University of ABC",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
      },
      {
        title: "Diploma in Computer Science",
        date: "2006 - 2010",
        subTitle: "XYZ Institution",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
      },
    ],
  },
  {
    icon: "/images/resume-icon2.png",
    headline: "Experience",
    details: [
      {
        title: "Senior UX/UI Designer",
        date: "Jan 2020 - Present",
        subTitle: "Bergnaum, Hills and Howe",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
      },
      {
        title: "Product Designer",
        date: "Jan 2016 - December 2019",
        subTitle: "Langosh, Sipes and Raynor",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
      },
      {
        title: "UI/UX Designer",
        date: "Jan 2014 - December 2015",
        subTitle: "Strosin, Maggio and Homenick",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
      },
    ],
  },
];

function Resume() {
  return (
    <section id="resume" className="bg-gray-950 pb-[100px]">
      <div className="container">
        <Title title="RESUME" section="RESUME" />
        <div className="grid grid-cols-2 gap-6">
          {resumeItems.map(({icon, details, headline}, index) => (
            <div key={index} className="">
              <div className="flex items-center gap-7 mb-12">
                <img src={icon} alt="" />
                <h2 className="text-5xl text-gray-100">{headline}</h2>
              </div>
              <div className="pl-14 flex flex-col gap-12 relative">
                {details.map(({title, date, subTitle, describtion}, index) => (
                  <div key={index} className="group">
                    <div className="relative">
                      <h3 className="text-lg text-primary -translate-y-2">
                        {title}
                      </h3>
                      <div className="w-3.5 h-3.5 border-2 border-gray-400 rounded-full group-hover:bg-primary duration-300 absolute top-0 -left-[46px] bg-gray-950 z-30" />
                    </div>
                    <p className="text-sm mb-5">{date}</p>
                    <h4 className="text-md text-gray-100 mb-5">{subTitle}</h4>
                    <div>{describtion}</div>
                    <div className="border border-gray-400 absolute top-0 bottom-0 left-4"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
