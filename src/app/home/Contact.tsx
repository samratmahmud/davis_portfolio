"use client";
import Buttons from "@/components/common/Buttons";
import SocialPlatform from "@/components/common/SocialPlatform";
import TextField from "@/components/common/TextField";
import Title from "@/components/common/Title";
import React, {useState} from "react";

const contactInfo = [
  {
    icon: "/images/icons8-email-24.png",
    title: "Email",
    contain1: "devis@example.com",
    contain2: "info@support.com",
    className: "hover:text-primary duration-300",
  },
  {
    icon: "/images/icons8-call-30 (1).png",
    title: "Phone",
    contain1: "+1 876-369-9009",
    contain2: "+1 213-519-1786",
  },
  {
    icon: "/images/icons8-location-24.png",
    title: "Address",
    contain1: "2661 High Meadow Lane Bear Creek,",
    contain2: "Olancha, KY 93544",
  },
];

const socialPlatform = [
  {
    icon: "/images/icons8-dribble-32.png",
    name: "Dribbble",
    link: "",
  },
  {
    icon: "/images/icons8-behance-32.png",
    name: "Behance",
    link: "",
  },
  {
    icon: "/images/icons8-twitter-30.png",
    name: "Twitter",
    link: "",
  },
  {
    icon: "/images/icons8-linkedin-48.png",
    name: "LinkedIn",
    link: "",
  },
];

function Contact() {
  const [show, setShow] = useState(0);

  return (
    <section id="contact" className="bg-gray-950 lg:py-[100px] py-20">
      <div className="container">
        <div data-aos="fade-up">
          <Title title="CONTACT" section="CONTACT" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex lg:flex-row flex-col lg:gap-6 gap-16"
        >
          <div className="lg:w-[50%]">
            <h2 className="text-2xl mb-6 text-gray-100">Just say Hello</h2>
            <div className="flex flex-col gap-[30px]">
              <TextField type="name" placeholder="Your Name" />
              <TextField type="email" placeholder="Your Email" />
              <TextField type="text" placeholder="Your Subject" />
              <textarea
                name="msg"
                id=""
                placeholder="Your Message"
                className="min-h-[150px] bg-slate-500 py-3 px-5 focus:outline-none border border-gray-400 w-full rounded-lg focus:border-primary duration-100 placeholder:text-slate-700 font-medium text-gray-700"
              ></textarea>
              <button className="flex" type="submit">
                <Buttons name="Send Message" />
              </button>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <h2 className="text-2xl mb-5 text-gray-100">Contact Info</h2>
            <p className="mb-6 text-10xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ligula nulla tincidunt id faucibus sed suscipit feugiat.
            </p>
            <div className="flex flex-col gap-7 mb-9">
              {contactInfo.map(
                ({icon, title, contain1, contain2, className}, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="w-[50px] h-[50px] rounded-full p-3.5 border border-gray-600 group-hover:border-primary duration-300 flex items-center justify-center">
                      <img src={icon} alt="" />
                    </div>
                    <div>
                      <h3 className="text-md text-gray-100 mb-1.5 -mt-1">
                        {title}
                      </h3>
                      <p className={`text-10xl ${className}`}>{contain1}</p>
                      <p className={`text-10xl ${className}`}>{contain2}</p>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="text-md font-medium mb-6">
              Visite my social profile and get connected
            </div>
            <div className="flex gap-5">
              {socialPlatform.map(({icon, name, link}, index) => (
                <SocialPlatform
                  icon={icon}
                  name={name}
                  link={link}
                  isActive={index === show}
                  handelChange={() => setShow(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
