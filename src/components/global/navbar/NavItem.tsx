import Link from "next/link";
import React from "react";

interface navItemProps {
  title: string;
  link: string;
  isActive: boolean;
  handelClick: () => void;
}

function NavItem(props: navItemProps) {
  const {title, link, isActive, handelClick} = props;
  return (
    <Link
      href={link}
      onClick={handelClick}
      className={`duration-300 py-3.5 font-roboto uppercase ${
        !isActive ? "text-gray-100 hover:text-gray-700" : "text-primary"
      }`}
    >
      {title}
    </Link>
  );
}

export default NavItem;
