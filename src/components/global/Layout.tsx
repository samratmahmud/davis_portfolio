"use client";
import React, {useEffect} from "react";
import Navbar from "./navbar/Navbar";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

interface layoutProps {
  children: React.ReactNode;
}

function Layout(props: layoutProps) {
  const {children} = props;
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });
  return (
    <main className="bg-gray-900">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
