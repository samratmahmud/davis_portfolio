import React from "react";
import Navbar from "./navbar/Navbar";

interface layoutProps {
  children: React.ReactNode;
}

function Layout(props: layoutProps) {
  const {children} = props;
  return (
    <main className="bg-gray-900">
      <Navbar /> {children}
    </main>
  );
}

export default Layout;
