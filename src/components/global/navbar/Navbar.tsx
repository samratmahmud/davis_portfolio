"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import NavItem from "./NavItem";
import {usePathname} from "next/navigation";
import {strict} from "assert";
import {stringify} from "querystring";

const navItems = [
  {
    title: "HOME",
    link: "#header",
  },
  {
    title: "ABOUT",
    link: "#about",
  },
  {
    title: "RESUME",
    link: "#resume",
  },
  {
    title: "PORTFOLIO",
    link: "#portfolio",
  },
  {
    title: "BLOG",
    link: "#blog",
  },
  {
    title: "CONTACT",
    link: "#contact",
  },
];

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY >= 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handelScroll();

    window.addEventListener("scroll", () => {
      handelScroll();
    });
  }, []);

  return (
    <nav
      className={`opacity-90 py-3.5 fixed left-0 right-0 z-[1020] duration-500 ${
        isVisible ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex gap-3 items-center justify-between">
          <Link href="/">
            <img src="/images/logo.png" alt="" />
          </Link>
          <div className="flex items-center gap-10">
            <div className="flex gap-10">
              {navItems.map(({title, link}, index) => (
                <NavItem key={index} title={title} link={link} />
              ))}
            </div>
            <div className="border border-gray-100 h-3" />
            <div className="flex items-center gap-4">
              <img
                className="w-5 h-5"
                src="/images/icons8-call-30.png"
                alt=""
              />
              <span className="text-primary">+1 971 234 1508</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
