import React from "react";
import Navbar from "./navbar/Navbar";

interface layoutProps {
  children: React.ReactNode;
}

function Layout(props: layoutProps) {
  const {children} = props;
  return (
    <main>
      <Navbar /> {children}
    </main>
  );
}

export default Layout;
