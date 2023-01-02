import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ heading }) => {
  return (
    <div className="w-full flex justify-start items-end h-56 bg-[#C6E2F1] dark:bg-[#6BB8E2] border-b-2 border-neutral-100 dark:border-neutral-700 box-content">
      <div className="page-and-user z-10 flex justify-between items-center w-full p-8">
        <h1 className="text-6xl font-bold tracking-tight">{heading}</h1>
        <Link href="/dashboard/settings">
          <div className="profile-picture h-16 w-16">
            <Image
              src="https://i.redd.it/klkxe1p2llz41.jpg"
              alt="clairo"
              className="rounded-full border-2 shadow-lg"
              height={250}
              width={250}
            />
          </div>
        </Link>
      </div>
      <div className="bg-image h-56 w-full overflow-hidden absolute top-0 opacity-30">
        <Image
          src="/dashboard-bg.png"
          alt="Header background image"
          className="w-full"
          width={1080}
          height={1080}
        />
      </div>
    </div>
  );
};

export default Header;
