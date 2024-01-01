"use client";
import Buttons from "@/components/common/Buttons";
import Title from "@/components/common/Title";
import Link from "next/link";
import React, {useState} from "react";

interface portfolioCardT {
  thumbnail: string;
  icon: string;
  title: string;
  describtion: string;
}

const portfolioCards: portfolioCardT[] = [
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
  const [openedItem, setOpenedItem] = useState<portfolioCardT | null>(null);

  return (
    <section id="portfolio">
      <div className="container my-100">
        <Title title="PORTFOLIO" section="PORTFOLIO" />
        <div className="relative">
          <div className="grid grid-cols-3 gap-6 mb-12">
            {portfolioCards.map(
              ({thumbnail, icon, title, describtion}, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden cursor-pointer"
                  onClick={() => setOpenedItem(portfolioCards[index])}
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
          <div>
            {openedItem !== null && (
              <div className="fixed top-0 left-0 right-0 z-[1080] bg-gray-950/75 backdrop:blur h-screen overflow-y-scroll py-7">
                <div className="bg-white max-w-[800px] mx-auto rounded-lg">
                  <div className="flex items-center justify-between gap-3 p-4">
                    <h2 className="text-gray-400 text-base tracking-normal font-bold">
                      {openedItem.title}
                    </h2>
                    <button onClick={() => setOpenedItem(null)}>
                      <img src="/images/icons8-close-32.png" alt="" />
                    </button>
                  </div>
                  <div className="border border-gray-300" />
                  <div className="p-4">
                    <img
                      className="mb-5 w-full"
                      src={openedItem.thumbnail}
                      alt=""
                    />
                    <p className="text-gray-400 mb-3">
                      {openedItem.describtion}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Link href="" className="flex justify-center">
          <Buttons name="Load more" />
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;
