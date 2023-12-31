import Link from "next/link";
import React from "react";

interface navItemProps {
  title: string;
  link: string;
  isActive?: boolean;
}

function NavItem(props: navItemProps) {
  const {title, link, isActive} = props;
  return (
    <Link
      href={link}
      className={`duration-300 py-3.5 font-roboto uppercase ${
        !isActive ? "text-gray-100 hover:text-gray-700" : "text-primary"
      }`}
    >
      {title}
    </Link>
  );
}

export default NavItem;
