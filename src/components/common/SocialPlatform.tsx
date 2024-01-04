import Link from "next/link";
import React from "react";

interface socialProps {
  icon: string;
  name: string;
  link: string;
  isActive?: boolean;
  handelChange?: () => void;
}

function SocialPlatform(props: socialProps) {
  const {icon, name, isActive, link, handelChange} = props;
  return (
    <Link
      href={link}
      onMouseEnter={handelChange}
      className="flex items-center border border-gray-600 rounded-full cursor-pointer"
    >
      <span className="p-[15px]">
        <img className="w-5 h-5 scale-150 opacity-70" src={icon} alt="" />
      </span>
      <span
        className={`text-gray-100 font-semibold  duration-500 overflow-hidden text-10xl ${
          isActive ? "max-w-[200px] mr-4" : "max-w-[0px] mr-0"
        }`}
      >
        {name}
      </span>
    </Link>
  );
}

export default SocialPlatform;
