import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="w-full px-8 py-8 flex justify-between items-center">
      <div className="logo flex justify-center items-center gap-2">
        <div className="logo-icon">
          <Image
            height={100}
            width={20}
            src="/voltec-logo.svg"
            className="hue-rotate-[-20deg]"
            alt="Voltec Logo"
          />
        </div>
        <h1 className="text-3xl tracking-tight font-bold">
          vol<span className="text-[#489FD0]">tec</span>.link
        </h1>
      </div>
      <div className="go-to-dashboard">
        <Link
          href={"/dashboard"}
          className="flex gap-2 text-[#489FD0] font-bold tracking-tight"
        >
          Go to dashboard{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
