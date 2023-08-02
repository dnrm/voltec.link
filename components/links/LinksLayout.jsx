import React from "react";
import Layout from "../Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import Option from "./Option";
import Button from "../Button";

const LinksLayout = ({ children, utils }) => {
  const { selectLink, links } = utils;
  return (
    <Layout pageTitle={"Links"}>
      <div className="links-page h-[78vh]">
        {links.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full h-full">
            <div className="hidden lg:block col-span-1 border-r-2 border-[#E1E1E1] dark:border-neutral-600 overflow-y-scroll no-scrollbar">
              {/* * LINK LIST */}
              {links.map((link, index) => {
                return (
                  <div
                    key={index}
                    id={index}
                    onClick={selectLink}
                    className={`hover:bg-[#f6f6f6] hover:dark:bg-neutral-700 link border-y-2 first:border-t-0 even:border-y-0 last:border-b-2 border-[#E1E1E1] dark:border-neutral-600 border-collapse p-5`}
                  >
                    <p className="text-xl text-headings dark:text-neutral-200 pointer-events-none">
                      {link.name}
                    </p>
                    <div className="stats flex justify-between items-center pointer-events-none">
                      <p className="text-primary underline">
                        https://voltec.link/{link.shortUrl}
                      </p>
                      <p className="text-neutral-400 dark:text-neutral-300">
                        {new Intl.NumberFormat("en-UK", {
                          notation: "compact",
                        }).format(link.clicks)}{" "}
                        click{link.clicks == 1 ? "" : "s"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-span-1 md:col-span-2 p-4 md:p-8 h-full bg-neutral-100 dark:bg-dark">
              {children}
            </div>
          </div>
        ) : (
          <div className="h-full w-full flex flex-col gap-8 justify-center items-center text-headings dark:text-headings-dark">
            <div className="message flex flex-col justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-28 h-28"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              <p className="text-2xl font-medium">
                There are no shortened links
              </p>
            </div>
            <Link href="/dashboard/create">
              <Button cta={true}>Create link</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LinksLayout;
