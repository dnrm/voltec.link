import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="text-headings dark:text-headings-dark grid-cols-5 grid">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <main className="col-span-4">
        <Header heading={pageTitle} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
