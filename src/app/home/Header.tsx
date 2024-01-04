"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import WaterWave from "react-water-wave";

const socialItems = [
  {
    icon: "/images/icons8-fb-24.png",
    link: "https:/www.facebook.com/",
  },
  {
    icon: "/images/icons8-twitter-48.png",
    link: "https:/www.twitter.com/",
  },
  {
    icon: "/images/icons8-github-48.png",
    link: "https:/www.github.com/",
  },
];

function Header() {
  return (
    <section>
      <WaterWave
        imageUrl={"/images/Screenshot 2024-01-02 094409.png"}
        perturbance={0.03}
        className="bg-cover bg-center"
      >
        {() => (
          <div id="header" className="py-32 grid place-content-center h-screen">
            <div className="container">
              <div className="mb-6">
                <img
                  data-aos="fade-up"
                  className="w-48 h-48 rounded-full border-[6px] border-slate-600/10 m-auto"
                  src="/images/hero-img.jpg"
                  alt=""
                />
              </div>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="md:text-7xl text-6xl font-semibold text-gray-100 text-center mb-5"
              >
                Hi, I am <span className="text-primary">Jhon Doe</span>
              </h1>
              <p
                data-aos-delay="300"
                data-aos="fade-up"
                className="text-center font-light md:text-sm text-10xl mb-5"
              >
                I am a frontend web developer. I can provide clean code and
                pixel perfect design. <br className="hidden md:block" /> I also
                make website more & more interactive with web animations.
              </p>
              <div className="flex justify-center gap-5">
                {socialItems.map(({icon, link}, index) => (
                  <Link
                    data-aos="fade-up"
                    data-aos-delay="400"
                    href={link}
                    key={index}
                    className=""
                  >
                    <img
                      className="w-11 h-11 border-2 border-slate-600/25 hover:border-slate-400 rounded-full p-2.5 opacity-70 hover:opacity-100 duration-300"
                      src={icon}
                      alt=""
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </WaterWave>
    </section>
  );
}

export default Header;
