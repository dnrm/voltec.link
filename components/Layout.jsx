import React from "react";
import Sidebar from "./Sidebar";
import MobileNavigation from "./MobileNavigation";
import Header from "./Header";
import { motion } from "framer-motion";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="text-headings dark:text-headings-dark">
      <div className="block absolute sm:hidden z-50">
        <MobileNavigation />
      </div>
      <div className="hidden absolute sm:block ">
        <Sidebar />
      </div>
      <main className="sm:ml-[6em] xl:ml-[20em]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Header heading={pageTitle} />
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;
