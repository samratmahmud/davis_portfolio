import Buttons from "@/components/common/Buttons";
import Tittle from "@/components/common/Title";
import Link from "next/link";
import React from "react";

const profileDetails = [
  {
    question: "Birthday",
    answer: "May 07, 1990",
  },
  {
    question: "Phone",
    answer: "+1 876-369-9009",
  },
  {
    question: "Email",
    answer: "devis@example.com",
  },
  {
    question: "From",
    answer: "devis@example.com",
  },
  {
    question: "Language",
    answer: "2661 Hich meadow lane bear creek",
  },
  {
    question: "Freelance",
    answer: "Available",
  },
  {
    question: "Freelance",
    answer: "Available",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container lg:my-[100px] my-20">
        <div data-aos="fade-up">
          <Tittle title="ABOUT ME" section="ABOUT ME" />
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-10 gap-7">
          <img
            data-aos="fade-right"
            data-aos-delay="200"
            className="w-full h-full lg:pr-4"
            src="/images/about.jpg"
            alt=""
          />
          <div data-aos="zoom-in" data-aos-delay="300">
            <h2 className="text-5xl mb-5 text-gray-100">
              Hi There! I'm Edward Davis
            </h2>
            <h4 className="text-lg font-light text-primary mb-5">
              Visual Designer
            </h4>
            <p className="mb-5">
              I am a Visual Designer with a strong focus on digital branding.
              Visul design seeks to attract, inspire, create desires and otivate
              people to respond to messages, with a view to making a favorable
              impact.
            </p>
            <div className="flex flex-col gap-3.5 mb-11">
              {profileDetails.map(({question, answer}, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="md:min-w-24 min-w-20">{question}</span>
                  <span>:</span>
                  <span>{answer}</span>
                </div>
              ))}
            </div>
            <Link href="" className="flex">
              <Buttons name="Download CV" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
