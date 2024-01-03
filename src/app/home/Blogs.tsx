"use client";
import Title from "@/components/common/Title";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

const blogsCards = [
  {
    thumbnail: "/images/blog1.jpg",
    admin: "Admin",
    date: "07-03-2023",
    title: "latest trends in Graphic design according to you?",
  },
  {
    thumbnail: "/images/blog2.jpg",
    admin: "Admin",
    date: "07-03-2023",
    title: "What are the latest trends in Graphic design according to you?",
  },
  {
    thumbnail: "/images/blog3.jpg",
    admin: "Admin",
    date: "07-03-2023",
    title: "Trends in Graphic design according to you?",
  },
  {
    thumbnail: "/images/blog1.jpg",
    admin: "Admin",
    date: "07-03-2023",
    title: "latest trends in Graphic design according to you?",
  },
  {
    thumbnail: "/images/blog2.jpg",
    admin: "Admin",
    date: "07-03-2023",
    title: "What are the latest trends in Graphic design according to you?",
  },
  {
    thumbnail: "/images/blog3.jpg",
    admin: "Admin",
    date: "07-03-2023",
    title: "Trends in Graphic design according to you?",
  },
];

function Blogs() {
  const settings = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 500,
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
    <section id="blog">
      <div className="container lg:my-[100px] my-20">
        <div data-aos="fade-up">
          <Title title="BLOGS" section="BLOGS" />
        </div>
        <Slider {...settings}>
          {blogsCards.map(({thumbnail, title, admin, date}, index) => (
            <div key={index} className="px-3">
              <Link href="/" target="_blank">
                <div className="overflow-hidden mb-6">
                  <img
                    className="scale-100 hover:scale-105 duration-300"
                    src={thumbnail}
                    alt=""
                  />
                </div>
              </Link>
              <div className="text-9xl mb-2">
                <span>By:</span>
                <span className="text-primary">{admin}</span>
                <span className="px-1">|</span>
                <span className="text-primary">{date}</span>
              </div>
              <h3 className="text-md text-gray-100 hover:text-primary duration-300">
                {title}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Blogs;
