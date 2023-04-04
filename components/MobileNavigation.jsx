import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`mobile-navigation ${
        isOpen ? "shadow-xl border-b-2 border-[#E1E1E1]" : null
      } z-50 pb-2`}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <div className={`hamburger cursor-pointer p-5`} onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        ) : (
          <motion.div
            key="x-section"
            exit={{ backgroundColor: "transparent" }}
            className={`x-button cursor-pointer p-5 bg-white`}
            onClick={toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key={"navbar"}
            initial={{ height: 0 }}
            animate={{ height: "33vh" }}
            exit={{ height: 0 }}
            className={`w-screen px-5 overflow-hidden bg-white`}
          >
            <Link
              href="/"
              className="logo flex justify-start items-center gap-2 py-8"
            >
              <div className="logo-icon">
                <Image
                  height={125}
                  width={25}
                  src="/voltec-logo.svg"
                  className="hue-rotate-[-15deg]"
                  alt="Voltec Logo"
                />
              </div>
              <h1 className="group-hover:block transition-all duration-200 text-2xl md:text-4xl tracking-tight font-bold dark:text-headings-dark">
                vol<span className="text-[#489FD0]">tec</span>.link
              </h1>
            </Link>
            <div className="create-new-link-button pb-2">
              <Link
                href="/dashboard/create"
                className="justify-start text-lg bg-primary flex xl:justify-start items-center gap-2 text-white p-2 rounded-xl w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="inline">Create link</span>
              </Link>
            </div>
            <div className="actions flex flex-col text-headings dark:text-headings-dark">
              <div className="links py-2 text-lg">
                <Link
                  href="/dashboard/links"
                  className={`justify-start flex  xl:justify-start items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 p-2 rounded-xl`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                  <span className="inline">Links</span>
                </Link>
              </div>
              <div className="team-members py-2 text-lg">
                <Link
                  href="/dashboard/users"
                  className="justify-start flex  xl:justify-start items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 p-2 rounded-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  <span className="inline">Team Members</span>
                </Link>
              </div>
              <div className="settings py-2 text-lg">
                <Link
                  href="/dashboard/settings"
                  className="justify-start flex  xl:justify-start items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 p-2 rounded-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="inline">Settings</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;
