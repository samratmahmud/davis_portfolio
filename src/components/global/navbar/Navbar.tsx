"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import NavItem from "./NavItem";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

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
  const [tab, setTab] = useState(-1);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

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
      className={`opacity-90 py-[13px] fixed left-0 right-0 z-[1020] duration-500 ${
        isVisible ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="lg:container px-3">
        <div className="flex gap-3 items-center justify-between">
          <Link href="/" className="py-[7px]">
            <img src="/images/logo.png" alt="" />
          </Link>
          <div className="flex items-center gap-10">
            <div className="hidden lg:block">
              <div className="flex gap-10">
                {navItems.map(({title, link}, index) => (
                  <NavItem
                    key={index}
                    title={title}
                    link={link}
                    isActive={tab === index}
                    handelClick={() => setTab(index)}
                  />
                ))}
              </div>
            </div>
            <div className="border border-gray-100 h-3 hidden xl:block" />
            <div onClick={toggle} className="cursor-pointer lg:hidden">
              <img
                className="w-9 h-7"
                src="/images/icons8-menu-50.png"
                alt=""
              />
            </div>
            <div className="hidden xl:block">
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
        <div>
          <Drawer onClose={toggle} open={open} direction="top">
            <div className="bg-gray-950 h-[340px] px-3 lg:px-0">
              <div className="flex items-center justify-between py-[13px] mb-8">
                <Link href="/">
                  <img src="/images/logo.png" alt="" />
                </Link>
                <div onClick={toggle} className="cursor-pointer">
                  <img
                    className="w-7 h-7"
                    src="/images/icons8-close-50.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 px-5">
                {navItems.map(({title, link}, index) => (
                  <NavItem
                    key={index}
                    title={title}
                    link={link}
                    isActive={tab === index}
                    handelClick={() => setTab(index)}
                  />
                ))}
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
