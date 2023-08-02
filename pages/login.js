import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import Warning from "../components/links/Warning";
import { useSession } from "next-auth/react";

import { signIn } from "next-auth/react";

const Login = () => {
  const session = useSession();
  console.log(session);

  const signInWithCredentials = () => {
    toast.error("Signing in with credentials is not supported yet.");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      <div className="col-span-1 md:col-span-1 lg:col-span-3 pattern h-36 md:h-full w-full bg-[#C6E2F1] dark:bg-[#6BB8E2]">
        <Image
          src="/dashboard-bg.png"
          alt="Header background image"
          className="w-full h-full object-cover opacity-30"
          width={1080}
          height={1080}
        />
      </div>
      <div className="login p-5 md:p-16 md:col-span-2 lg:col-span-2 md:h-screen">
        <Link href="/">
          <div className="back text-headings dark:text-headings-dark flex justify-start items-center gap-2 text-xl">
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Home
          </div>
        </Link>
        <div className="form pt-8 md:pt-16">
          <h1 className="text-6xl font-bold tracking-tight text-headings dark:text-headings-dark">
            Login
          </h1>
          <h2 className="text-neutral-400 pt-4 pb-16">
            Log in with your institutional account.
            <br />
            <br />
            <Warning
              icon={
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
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              }
              label={
                "Please do not login using email and password unless specified by an admin."
              }
            />
          </h2>
          <form className="input-fields py-2 flex flex-col gap-4">
            <div className="email-input flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-2xl font-medium text-headings dark:text-headings-dark"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="engineer@voltec6647.com"
                id="email"
                name="email"
                className="border-2 placeholder:text-neutral-300 border-neutral-200 dark:border-neutral-700 rounded-lg p-2 dark:bg-dark outline-none text-headings dark:text-headings-dark"
              />
            </div>
            <div className="password-input flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-2xl font-medium text-headings dark:text-headings-dark"
              >
                Password
              </label>
              <input
                placeholder="••••••••"
                type="password"
                id="password"
                name="password"
                className="border-2 placeholder:text-neutral-300 border-neutral-200 dark:border-neutral-700 rounded-lg p-2 dark:bg-dark outline-none text-headings dark:text-headings-dark"
              />
            </div>
            <div className="login-button w-full pt-4">
              <button
                onClick={signInWithCredentials}
                className="bg-primary rounded-xl w-full p-2 text-headings-dark text-lg"
              >
                Login
              </button>
            </div>
          </form>
          <div className="line grid grid-cols-3 items-center justify-center py-8">
            <hr />
            <p className="text-center text-headings dark:text-headings-dark">
              or
            </p>
            <hr />
          </div>
          <div className="signin-with-google">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="flex justify-center items-center gap-2 border-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 border-neutral-200 dark:border-neutral-700 rounded-xl w-full p-2 text-headings dark:text-headings-dark text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="20"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
