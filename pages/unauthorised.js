import React from "react";
import Button from "../components/Button";
import Link from "next/link";

const unauthorised = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="page flex flex-col justify-center items-center gap-8">
        <div className="texts text-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-headings dark:text-headings-dark text-center">
            You are not authorised to log in.
          </h1>
          <span className="text-neutral-400 dark:text-headings-dark">Correct account?</span>
        </div>
        <Link href="/">
          <Button cta={true}>
            <div className="flex justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Go home
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default unauthorised;
