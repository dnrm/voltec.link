import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="text-headings dark:text-headings-dark">
      <div className="hidden absolute sm:block ">
        <Sidebar />
      </div>
      <main className="sm:ml-[6em] xl:ml-[22em]">
        <Header heading={pageTitle} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
