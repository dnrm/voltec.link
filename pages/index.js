import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/Navigation";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="grid grid-cols-1 gap-14 md:gap-28 z-30">
        <section
          id="introduction"
          className="pt-24 md:pt-36 flex flex-col gap-6 md:gap-10 max-w-7xl mx-auto p-5"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-center text-headings leading-[0.85]">
            Share VOLTEC’s digital <br /> content with ease
          </h1>
          <p className="text-[#808080] leading-loose text-center text-base md:text-lg max-w-xl md:max-w-2xl mx-auto">
            Create easily-shareable and customised links for whatever type of
            content, wether it is social media accounts, invitations, or meeting
            invitations.
          </p>
          <div className="cta text-center">
            <Button filled={true}>Start creating</Button>
          </div>
        </section>
        <section
          id="screenshot"
          className="flex justify-center items-center p-5"
        >
          <div className="gradient absolute w-screen h-[45%] md:h-full home-cover-image-background -z-30" />
          <Image
            src="/home-cover.png"
            alt="Screenshot of voltec.link web app dashboard"
            className="mx-auto rounded-2xl drop-shadow-lg"
            height={500}
            width={1000}
          />
        </section>
        <section id="technologies max-w-7xl mx-auto">
          <h2 className="text-[#489FD0] text-center text-xl md:text-2xl">
            Built using the latest technologies
          </h2>
          <div className="technologies flex justify-center items-center">
            <div className="nextjs py-4 md:py-10 text-gray-400">
              <Image
                width={75}
                height={75}
                src="/technologies/nextjs.svg"
                alt="Next.js Logo"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
