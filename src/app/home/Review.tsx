"use client";
import Title from "@/components/common/Title";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const reviewCards = [
  {
    contain:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam accusamus autem itaque blanditiis enim debitis totam facilis reiciendis voluptate aspernatur!",
    thumbnail: "/images/client3.png",
    name: "Joseph Alves",
    title: "Managing Director",
  },
  {
    contain:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam accusamus autem itaque blanditiis enim debitis totam facilis reiciendis voluptate aspernatur!",
    thumbnail: "/images/client1.png",
    name: "Richard Miles",
    title: "Chairman",
  },
  {
    contain:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam accusamus autem itaque blanditiis enim debitis totam facilis reiciendis voluptate aspernatur!",
    thumbnail: "/images/client2.png",
    name: "Vesta Shufelt",
    title: "Executive Director",
  },
  {
    contain:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam accusamus autem itaque blanditiis enim debitis totam facilis reiciendis voluptate aspernatur!",
    thumbnail: "/images/client3.png",
    name: "Joseph Alves",
    title: "Managing Director",
  },
  {
    contain:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam accusamus autem itaque blanditiis enim debitis totam facilis reiciendis voluptate aspernatur!",
    thumbnail: "/images/client1.png",
    name: "Richard Miles",
    title: "Chairman",
  },
  {
    contain:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam accusamus autem itaque blanditiis enim debitis totam facilis reiciendis voluptate aspernatur!",
    thumbnail: "/images/client2.png",
    name: "Vesta Shufelt",
    title: "Executive Director",
  },
];

function Review() {
  const settings = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-gray-950 py-[100px]">
      <div className="container">
        <Title title="REVIEW" section="REVIEW" />
        <Slider {...settings}>
          {reviewCards.map(({contain, thumbnail, name, title}, index) => (
            <div key={index} className="group px-3">
              <div className="mb-10 relative border group-hover:border-primary border-gray-400 duration-300 bg-slate-500 rounded">
                <div className="py-[30px] px-[15px] text-center ">
                  {contain}
                </div>
                <div className="bg-slate-500 w-8 h-8 rotate-45 absolute -bottom-4 left-[46%] border-r border-b group-hover:border-primary border-gray-400 duration-300" />
              </div>
              <div className="flex flex-col items-center">
                <img className="mb-5" src={thumbnail} alt="" />
                <h3 className="text-md mb-1 text-gray-100 group-hover:text-primary duration-300">
                  {name}
                </h3>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Review;
