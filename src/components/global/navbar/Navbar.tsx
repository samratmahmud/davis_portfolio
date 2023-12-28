import Link from "next/link";
import React from "react";

const navItems = [
  {
    title: "HOME",
    link: "#",
  },
  {
    title: "ABOUT",
    link: "#",
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
                <Link
                  href={link}
                  key={index}
                  className="text-gray-100 hover:text-gray-700 duration-300 py-3.5 font-roboto uppercase"
                >
                  {title}
                </Link>
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
