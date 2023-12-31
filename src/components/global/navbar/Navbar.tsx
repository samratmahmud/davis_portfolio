"use client";
import Link from "next/link";
import React, {useState} from "react";
import NavItem from "./NavItem";
import {usePathname} from "next/navigation";

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
    link: "#",
  },
  {
    title: "PORTFOLIO",
    link: "#",
  },
  {
    title: "BLOG",
    link: "#",
  },
  {
    title: "CONTACT",
    link: "#",
  },
];

function Navbar() {
  return (
    <nav className="bg-gray-900 opacity-90 py-3.5 fixed left-0 right-0 z-[1020]">
      <div className="container">
        <div className="flex gap-3 items-center justify-between">
          <Link href="/">
            <img src="/images/logo.png" alt="" />
          </Link>
          <div className="flex items-center gap-11">
            <div className="flex gap-10">
              {navItems.map(({title, link}, index) => (
                <NavItem key={index} title={title} link={link} />
              ))}
            </div>
            <div className="border border-gray-100 h-5" />
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
