import Title from "@/components/common/Title";
import React from "react";

const serviceCards = [
  {
    icon: "/images/icon1.png",
    title: "Sketches",
    describtion:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    icon: "/images/icon2.png",
    title: "UI/UX Design",
    describtion:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    icon: "/images/icon3.png",
    title: "Product Design",
    describtion:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    icon: "/images/icon4.png",
    title: "App Design",
    describtion:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    icon: "/images/icon5.png",
    title: "Motion Graphics",
    describtion:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    icon: "/images/icon6.png",
    title: "Responsive Design",
    describtion:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
];

function Service() {
  return (
    <section>
      <div className="container my-100">
        <Title title="SERVICE" section="SERVICE" />
        <div className="grid grid-cols-3 gap-6">
          {serviceCards.map(({title, icon, describtion}, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-400 rounded py-[50px] px-[30px] group bg-slate-500"
            >
              <div className="w-[90px] aspect-square p-[18px] border border-gray-600 group-hover:border-primary duration-300 rounded-full mb-7">
                <img
                  className="filter-gray opacity-40 group-hover:filter-none group-hover:opacity-100 duration-300"
                  src={icon}
                  alt=""
                />
              </div>
              <h2 className="text-md mb-4 group-hover:text-primary duration-300 text-gray-100">
                {title}
              </h2>
              <p className="text-center">{describtion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
