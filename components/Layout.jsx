import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="text-headings dark:text-headings-dark">
      <div className="hidden absolute md:block">
        <Sidebar />
      </div>
      <main className="md:ml-[25em]">
        <Header heading={pageTitle} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
