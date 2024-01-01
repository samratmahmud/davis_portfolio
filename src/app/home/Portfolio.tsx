import Buttons from "@/components/common/Buttons";
import Title from "@/components/common/Title";
import Link from "next/link";
import React from "react";

const portfolioCards = [
  {
    thumbnail: "/images/portfolio1_lg.jpg",
    icon: "/images/plus.svg",
    title: "Product Design",
    describtion: "Design / Marketing",
  },
  {
    thumbnail: "/images/portfolio2.jpg",
    icon: "/images/plus.svg",
    title: "Product Design",
    describtion: "Design / Marketing",
  },
  {
    thumbnail: "/images/portfolio3_lg.jpg",
    icon: "/images/plus.svg",
    title: "Product Design",
    describtion: "Design / Marketing",
  },
  {
    thumbnail: "/images/portfolio4.jpg",
    icon: "/images/plus.svg",
    title: "Product Design",
    describtion: "Design / Marketing",
  },
  {
    thumbnail: "/images/portfolio5.jpg",
    icon: "/images/plus.svg",
    title: "Product Design",
    describtion: "Design / Marketing",
  },
  {
    thumbnail: "/images/portfolio6.jpg",
    icon: "/images/plus.svg",
    title: "Product Design",
    describtion: "Design / Marketing",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container my-100">
        <Title title="PORTFOLIO" section="PORTFOLIO" />
        <div className="grid grid-cols-3 gap-6 mb-12">
          {portfolioCards.map(
            ({thumbnail, icon, title, describtion}, index) => (
              <div
                key={index}
                className="relative group overflow-hidden cursor-pointer"
              >
                <div className="scale-100 group-hover:scale-110 duration-500">
                  <img className="w-full" src={thumbnail} alt="" />
                </div>
                <div className="hidden group-hover:block">
                  <div className="absolute inset-0 bg-gray-600/85 duration-300 z-40 border border-gray-800">
                    <div className="border-[1.5px] border-gray-700 flex flex-col items-center justify-end absolute inset-5 pb-5">
                      <div className="bg-primary/80 w-[50px] h-[50px] rounded-full mb-10">
                        <img className="w-full" src={icon} alt="" />
                      </div>
                      <h2 className="text-md text-gray-100 mb-2">{title}</h2>
                      <p>{describtion}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <Link href="" className="flex justify-center">
          <Buttons name="Load more" />
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;
