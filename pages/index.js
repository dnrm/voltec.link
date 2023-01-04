import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/Navigation";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
<title>voltec.link – VOLTEC's URL Shortener</title>
<meta name="title" content="voltec.link – VOLTEC's URL Shortener" />
<meta name="description" content="Create easily-shareable and customised links for whatever type of content, wether it is social media accounts, invitations, or meeting invitations." />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://metatags.io/" />
<meta property="og:title" content="voltec.link – VOLTEC's URL Shortener" />
<meta property="og:description" content="Create easily-shareable and customised links for whatever type of content, wether it is social media accounts, invitations, or meeting invitations." />
<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://metatags.io/" />
<meta property="twitter:title" content="voltec.link – VOLTEC's URL Shortener" />
<meta property="twitter:description" content="Create easily-shareable and customised links for whatever type of content, wether it is social media accounts, invitations, or meeting invitations." />
<meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

      </Head>
      <div className="flex justify-center items-center announcement w-full bg-primary p-2 text-lg text-white font-normal">
        <p className="w-full text-center">🚧 Work in progress 🚧</p>
        <svg
          onClick={() => {
            document.querySelector(".announcement").style.display = "none";
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 justify-self-start"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <Navigation />
      <main className="grid grid-cols-1 gap-14 md:gap-28 z-30 pb-16 dark:bg-dark">
        <section
          id="introduction"
          className="pt-24 md:pt-36 flex flex-col gap-6 md:gap-10 max-w-7xl mx-auto p-5"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-center text-headings dark:text-headings-dark leading-[0.85]">
            Share VOLTEC’s digital content with ease
          </h1>
          <p className="text-[#808080] dark:text-secondary-dark leading-loose text-center text-base md:text-lg max-w-xl md:max-w-2xl mx-auto">
            Create easily-shareable and customised links for whatever type of
            content, wether it is social media accounts, invitations, or meeting
            invitations.
          </p>
          <div className="cta text-center">
            <Button cta={true}>Start creating</Button>
          </div>
        </section>
        <section
          id="screenshot"
          className="flex justify-center items-center p-5"
        >
          <div className="gradient absolute w-full h-[45%] md:h-full home-cover-image-background" />
          <Image
            src="/home-cover.png"
            alt="Screenshot of voltec.link web app dashboard"
            className="mx-auto rounded-2xl drop-shadow-lg dark:hidden z-10"
            height={500}
            width={1000}
          />
          {/* // TODO FIX SHADOW IN DARK MODE */}
          <Image
            src="/home-cover-dark.png"
            alt="Screenshot of voltec.link web app dashboard"
            className="mx-auto rounded-2xl shadow-neutral-700 shadow-lg hidden dark:block z-10"
            height={500}
            width={1000}
          />
        </section>
        <section id="technologies" className="max-w-7xl mx-auto">
          <h2 className="text-[#489FD0] text-center text-xl md:text-2xl">
            Built using the latest technologies
          </h2>
          <div className="technologies flex flex-wrap gap-8 md:gap-16 justify-center items-center px-5 py-4 md:py-10">
            <div className="nextjs w-32 text-technologies">
              <svg viewBox="0 0 207 124" version="1.1">
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="currentColor"
                  fillRule="evenodd"
                >
                  <g
                    id="Black-Next.js"
                    transform="translate(-247.000000, -138.000000)"
                    fill="currentColor"
                    fill-rule="nonzero"
                  >
                    <g
                      id="next-black"
                      transform="translate(247.000000, 138.000000)"
                    >
                      <g id="EXT-+-Type-something">
                        <path
                          d="M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z"
                          id="EXT"
                        />
                        <polygon
                          id="Type-something"
                          points="0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303"
                        />
                      </g>
                      <path
                        d="M183.396622,86.5227221 C184.134938,86.5227221 184.673474,85.9601075 184.673474,85.233037 C184.673474,84.5059658 184.134938,83.9433513 183.396622,83.9433513 C182.666993,83.9433513 182.11977,84.5059658 182.11977,85.233037 C182.11977,85.9601075 182.666993,86.5227221 183.396622,86.5227221 Z M186.905793,83.1297235 C186.905793,85.2763149 188.460599,86.678523 190.727662,86.678523 C193.142388,86.678523 194.601647,85.233037 194.601647,82.7229099 L194.601647,73.8855335 L192.655968,73.8855335 L192.655968,82.7142542 C192.655968,84.1078073 191.952397,84.8521899 190.710289,84.8521899 C189.598473,84.8521899 188.842785,84.1597409 188.816727,83.1297235 L186.905793,83.1297235 Z M197.146664,83.0172011 C197.285642,85.2503478 199.153145,86.678523 201.932686,86.678523 C204.903321,86.678523 206.762139,85.1811034 206.762139,82.792155 C206.762139,80.9138876 205.702439,79.8752151 203.131364,79.2779777 L201.750279,78.9404092 C200.117298,78.5595622 199.457158,78.0488813 199.457158,77.1573541 C199.457158,76.0321243 200.482113,75.296398 202.019547,75.296398 C203.478806,75.296398 204.48639,76.0148135 204.668797,77.1660091 L206.562359,77.1660091 C206.44944,75.0626962 204.590622,73.5825873 202.045605,73.5825873 C199.309495,73.5825873 197.48542,75.0626962 197.48542,77.2871878 C197.48542,79.1221767 198.519063,80.2127835 200.786126,80.7407758 L202.401734,81.1302779 C204.060773,81.5197807 204.790402,82.091051 204.790402,83.0431676 C204.790402,84.1510859 203.643842,84.9560573 202.08035,84.9560573 C200.403939,84.9560573 199.240006,84.2030196 199.074971,83.0172011 L197.146664,83.0172011 Z"
                        id=".JS"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="mongodb text-technologies w-52">
              <svg
                id="Layer_1"
                dataName="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1112.61 300"
                fill="currentColor"
              >
                <title>MongoDB_Logo_FullColorBlack_RGB</title>
                <path
                  className="cls-1"
                  fill="currentColor"
                  d="M134.44,120.34C119.13,52.8,87.22,34.82,79.08,22.11a144.57,144.57,0,0,1-8.9-17.42c-.43,6-1.22,9.78-6.32,14.33C53.62,28.15,10.13,63.59,6.47,140.33c-3.41,71.55,52.6,115.67,60,120.23,5.69,2.8,12.62.06,16-2.51,27-18.53,63.89-67.93,52-137.71"
                />
                <path
                  className="cls-2"
                  fill="currentColor"
                  d="M72.5,222.46c-1.41,17.71-2.42,28-6,38.12,0,0,2.35,16.86,4,34.72h5.84a324.73,324.73,0,0,1,6.37-37.39C75.15,254.19,72.79,238,72.5,222.46Z"
                />
                <path
                  className="cls-3"
                  fill="#d8d8d8"
                  d="M82.7,257.92h0c-7.64-3.53-9.85-20.06-10.19-35.46a725.83,725.83,0,0,0,1.65-76.35c-.4-13.36.19-123.74-3.29-139.9A134.29,134.29,0,0,0,79.08,22.1c8.14,12.72,40.06,30.7,55.36,98.24C146.36,190,109.67,239.27,82.7,257.92Z"
                />
                <path
                  className="cls-4"
                  d="M1089.7,233.5a16.59,16.59,0,1,1,16.59-16.82,16.38,16.38,0,0,1-16.59,16.82m0-31.68a15.1,15.1,0,1,0,15,15.14,14.85,14.85,0,0,0-15-15.14m4,25.58-4.28-9.23h-3.45v9.23h-2.51v-21h6.19c4.61,0,6.53,2,6.53,5.87,0,3.08-1.45,5-4.15,5.59l4.42,9.51ZM1086.07,216h3.63c2.94,0,4.06-1,4.06-3.68s-1.07-3.59-4.38-3.59h-3.31Z"
                />
                <path
                  className="cls-4"
                  d="M842.79,218.38c4.49,3.59,13.46,5.07,21.37,5.07,10.25,0,20.3-1.9,30.12-10.77,10-9.09,16.88-23,16.88-45.21,0-21.34-8.12-38.66-24.78-48.8-9.4-5.91-21.58-8.24-35.47-8.24-4,0-8.12.21-10.46,1.27a5.49,5.49,0,0,0-1.93,3c-.42,3.8-.42,32.74-.42,49.85,0,17.54,0,42,.42,45,.22,2.54,1.5,7,4.27,8.87M800.15,100.93c3.63,0,17.43.63,23.85.63,12,0,20.29-.63,42.72-.63,18.8,0,34.62,5.07,45.93,14.78,13.68,11.84,21,28.31,21,48.38,0,28.52-13,45-26.07,54.29-13,9.72-29.91,15.21-54,15.21-12.82,0-34.83-.42-53.2-.63H800c-.86-1.69,1.57-8.28,3.07-8.45,5-.56,6.32-.76,8.62-1.71,3.88-1.59,4.79-3.57,5.22-10.54.64-13.1.43-28.73.43-46.48,0-12.67.21-37.39-.21-45.21-.65-6.54-3.41-8.23-9-9.5a116.24,116.24,0,0,0-12-1.9c-.42-1.27,2.86-7,3.93-8.24"
                />
                <path
                  className="cls-4"
                  d="M986.6,111.65c-.85.21-1.92,2.33-1.92,3.38-.22,7.61-.43,27.46-.43,41.19a1.36,1.36,0,0,0,1.07,1.06c2.77.21,9.61.43,15.38.43,8.12,0,12.82-1.06,15.38-2.33,6.84-3.38,10-10.78,10-18.8,0-18.38-12.82-25.35-31.83-25.35a57.35,57.35,0,0,0-7.69.42m48.5,84.5c0-18.59-13.68-29.15-38.68-29.15-1.06,0-9-.21-10.89.21-.64.21-1.28.63-1.28,1.06,0,13.31-.22,34.64.43,43.09.43,3.59,3,8.66,6.19,10.14,3.42,1.9,11.11,2.32,16.45,2.32,14.74,0,27.78-8.23,27.78-27.67M948,101.3c1.93,0,7.61.63,22.14.63,13.67,0,24.78-.42,38-.42,16.45,0,39.09,5.92,39.09,30.42,0,12-8.54,21.76-19.65,26.41-.64.21-.64.63,0,.84,15.81,4,29.69,13.73,29.69,32.32,0,18.17-11.32,29.58-27.77,36.76-10,4.44-22.43,5.91-35,5.91-9.61,0-35.37-1-49.69-.84-1.5-.63,1.37-7.4,2.65-8.45a39.38,39.38,0,0,0,9.69-1.52c5.12-1.26,5.73-2.91,6.37-10.52.43-6.55.43-30,.43-46.69,0-22.82.22-38.23,0-45.84-.21-5.91-2.35-7.82-6.41-8.87-3.2-.64-8.54-1.27-12.81-1.9-1.07-1.06,2.22-7.4,3.28-8.24"
                />
                <path
                  className="cls-4"
                  d="M181.75,233.5a9.26,9.26,0,0,1-.65-4.27,5.43,5.43,0,0,1,.65-2.85,72.58,72.58,0,0,0,8.2-1.67c3.78-.94,5.2-3,5.42-7.82.62-11.39.66-32.76.44-47.78v-.44c0-1.62,0-3.82-2-5.37a42.94,42.94,0,0,0-11.33-5c-1.79-.53-2.78-1.47-2.73-2.57s1.18-2.4,3.51-2.86c6.19-.63,22.41-4.5,28.78-7.44a4.22,4.22,0,0,1,.85,3c0,.66-.1,1.36-.17,2.08-.18,2.12-.38,4.53-.38,6.93a1.58,1.58,0,0,0,2.68.91c12.13-9.51,23-12.9,28.57-12.9,9.17,0,16.31,4.38,21.84,13.4a1.47,1.47,0,0,0,1.24.73,1.42,1.42,0,0,0,1.16-.62c11.15-8.46,22.2-13.51,29.6-13.51,17.48,0,27.93,13.09,27.93,35,0,6.3-.06,14.29-.12,21.74-.05,6.54-.1,12.67-.1,16.91,0,1,1.38,3.88,3.45,4.45,2.56,1.25,6.25,1.89,10.92,2.69l.18,0c.35,1.26-.39,6.15-1.1,7.15-1.16,0-2.76-.1-4.76-.2-3.63-.18-8.61-.43-14.4-.43-11.62,0-17.69.22-23.49.6-.44-1.45-.59-6.13-.06-7.11A61.55,61.55,0,0,0,303,224.7c3.7-1.22,4.77-2.9,5-7.81.09-3.49.76-34.24-.43-41.54-1.1-7.57-6.8-16.43-19.27-16.43-4.63,0-12.1,1.93-19.22,7.33a2.8,2.8,0,0,0-.7,1.81v.15c.84,3.94.84,8.54.84,15.49,0,4,0,8.17-.05,12.34-.05,8.48-.09,16.48.05,22.53,0,4.12,2.49,5.11,4.5,5.9,1.09.24,1.95.45,2.82.65,1.67.41,3.41.83,6,1.24a11.49,11.49,0,0,1-.1,5.32,4.26,4.26,0,0,1-.75,1.81c-6.46-.22-13.09-.41-22.66-.41-2.9,0-7.63.12-11.81.23-3.39.09-6.59.18-8.41.19a8.24,8.24,0,0,1-.64-3.68,6.38,6.38,0,0,1,.67-3.44l2.57-.47c2.24-.4,4.18-.74,6-1.2,3.16-1,4.35-2.72,4.58-6.75.62-9.4,1.1-36.49-.23-43.27-2.26-10.88-8.45-16.4-18.41-16.4-5.83,0-13.2,2.81-19.22,7.32a5.86,5.86,0,0,0-1.77,4.35c0,3.23,0,7.07,0,11.19,0,13.6-.09,30.53.24,37.85.2,2.26,1,4.94,5.23,5.92.93.27,2.53.53,4.39.84,1.07.18,2.24.37,3.45.59a15.16,15.16,0,0,1-.57,7.15c-1.86,0-4.15-.12-6.77-.23-4-.18-9-.4-14.65-.4-6.68,0-11.33.22-15.06.4-2.51.12-4.68.22-6.85.23"
                />
                <path
                  className="cls-4"
                  d="M396.2,154.49A18.22,18.22,0,0,0,386,157.36c-7.42,4.51-11.2,13.52-11.2,26.76,0,24.78,12.41,42.09,30.18,42.09A19,19,0,0,0,418,221.6c5.46-4.45,8.36-13.55,8.36-26.29,0-24.41-12.13-40.82-30.18-40.82m3.42,80.91c-32.1,0-43.53-23.55-43.53-45.58,0-15.39,6.29-27.42,18.7-35.77a57.11,57.11,0,0,1,28.89-8.54c24.49,0,41.6,17.61,41.6,42.84,0,17.14-6.83,30.68-19.76,39.14-6.21,3.8-17,7.91-25.9,7.91"
                />
                <path
                  className="cls-4"
                  d="M723,154.49a18.17,18.17,0,0,0-10.22,2.87c-7.42,4.51-11.2,13.52-11.2,26.76,0,24.78,12.41,42.09,30.18,42.09a19,19,0,0,0,13.06-4.61c5.46-4.45,8.35-13.55,8.35-26.29,0-24.41-12.12-40.82-30.17-40.82m3.42,80.91c-32.1,0-43.53-23.55-43.53-45.57,0-15.41,6.29-27.43,18.71-35.78a57,57,0,0,1,28.88-8.54c24.49,0,41.6,17.62,41.6,42.83,0,17.16-6.83,30.69-19.76,39.14-6.21,3.81-17,7.92-25.9,7.92"
                />
                <path
                  className="cls-4"
                  d="M614.92,153.65c-9.89,0-16.29,7.81-16.29,19.9s5.51,26.46,21,26.46c2.66,0,7.48-1.18,9.87-3.81,3.6-3.31,6-10.15,6-17.37,0-15.77-7.68-25.18-20.53-25.18m-1.28,83.44a16.29,16.29,0,0,0-8,2c-7.83,5-11.46,10-11.46,15.81,0,5.44,2.11,9.77,6.65,13.61,5.5,4.66,12.92,6.93,22.67,6.93,19.19,0,27.79-10.32,27.79-20.54,0-7.12-3.57-11.89-10.92-14.59-5.66-2.07-15.12-3.21-26.7-3.21m1.28,49c-11.52,0-19.82-2.43-26.91-7.89-6.9-5.32-10-13.22-10-18.68a14.61,14.61,0,0,1,3.78-9.5c2-2.28,6.65-6.55,17.4-13.94a.92.92,0,0,0,.56-.85.89.89,0,0,0-.68-.88c-8.85-3.39-11.52-9-12.33-12,0-.11,0-.28-.09-.47-.25-1.18-.49-2.3,1.12-3.45,1.24-.88,3.22-2.06,5.34-3.31a71.89,71.89,0,0,0,8.59-5.59,1.41,1.41,0,0,0-.36-2.2c-13.1-4.4-19.7-14.13-19.7-29a28.83,28.83,0,0,1,12.1-23.73c5.27-4.17,18.5-9.18,27.07-9.18h.5c8.81.21,13.78,2.06,20.66,4.6a32.84,32.84,0,0,0,12.22,1.94c7.29,0,10.48-2.31,13.22-5a11.47,11.47,0,0,1,.7,3.78,14.22,14.22,0,0,1-2.38,8.68c-1.49,2.07-5,3.57-8.21,3.57-.33,0-.65,0-1-.05a26.94,26.94,0,0,1-5-.83l-.82.29c-.26.38-.09.8.12,1.34a1.7,1.7,0,0,1,.12.33,58.52,58.52,0,0,1,1.19,8.1c0,15.55-6.13,22.32-12.76,27.34a43.56,43.56,0,0,1-22,8.52h0c-.17,0-1,.07-2.56.21-1,.09-2.3.21-2.49.21l-.19,0c-1.44.4-5.2,2.19-5.2,5.52,0,2.76,1.7,6.19,9.83,6.81l5.26.37c10.72.75,24.11,1.68,30.41,3.81a21.06,21.06,0,0,1,14.07,20.27c0,13.95-9.92,27.07-26.53,35.09a57.66,57.66,0,0,1-25.09,5.63"
                />
                <path
                  className="cls-4"
                  d="M565.86,226.06c-4.7-.63-8.13-1.27-12.18-3.17a5.6,5.6,0,0,1-1.5-3c-.43-6.55-.43-25.56-.43-38,0-10.15-1.7-19-6-25.35-5.13-7.19-12.39-11.41-21.79-11.41-8.33,0-19.44,5.7-28.62,13.52-.22.21-1.63,1.55-1.6-.53s.35-6.3.55-9a4.63,4.63,0,0,0-1.4-3.92c-6,3-22.83,7-29.06,7.61-4.54.88-5.69,5.25-.84,6.76l.07,0a41.46,41.46,0,0,1,11,4.84c1.92,1.48,1.71,3.59,1.71,5.28.21,14.15.21,35.91-.43,47.74-.21,4.65-1.5,6.34-4.92,7.19l.32-.11a66.46,66.46,0,0,1-7.91,1.48c-1.07,1.05-1.07,7.18,0,8.45,2.14,0,13-.63,22-.63,12.38,0,18.79.63,22,.63,1.29-1.48,1.71-7.18.86-8.45a45,45,0,0,1-8.77-1.27c-3.41-.84-4.27-2.54-4.48-6.33-.42-9.94-.42-31.06-.42-45.43,0-4,1.06-5.91,2.34-7,4.27-3.8,11.33-6.33,17.52-6.33,6,0,10,1.9,13,4.43A18.1,18.1,0,0,1,533,176c.85,8,.63,24.09.63,38,0,7.61-.63,9.52-3.41,10.36-1.28.63-4.7,1.27-8.76,1.69-1.28,1.27-.86,7.18,0,8.45,5.55,0,12-.63,21.36-.63,11.75,0,19.23.63,22.22.63,1.28-1.48,1.71-7,.86-8.45"
                />
              </svg>
            </div>
            <div className="javascript w-16 text-technologies">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
                <rect width="630" height="630" fill="currentColor" />
                <path
                  fill={"white"}
                  d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
                />
              </svg>
            </div>
            <div className="rust">
              <Image
                width={50}
                height={50}
                src="/technologies/rust.svg"
                alt="Next.js Logo"
              />
            </div>
            <div className="vercel text-technologies w-36">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 284 65"
              >
                <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
              </svg>
            </div>
          </div>
        </section>
        <section
          id="benefits"
          className="grid grid-cols-1 gap-36 md:gap-64 max-w-6xl mx-auto px-5 py-4 md:pt-10 md:pb-20"
        >
          <div className="reach flex flex-col justify-center items-start">
            <span className="number absolute text-[20em] text-[#eeeeee] dark:text-[#333333] font-black pl-16">
              1
            </span>
            <h2 className="text-2xl font-bold md:text-5xl w-full text-left z-10 text-headings dark:text-headings-dark">
              <span className="text-8xl text-primary">Reach</span> a wider
              audience
            </h2>
            <p className="leading-loose text-[#808080] dark:text-secondary-dark z-10 text-base md:text-lg">
              With custom and shorter links, people will find it easier to
              remember and type it out, therefore averaging more diffusion and
              reach of your content.
            </p>
          </div>
          <div className="create flex flex-col justify-center items-start">
            <span className="number absolute text-[20em] text-[#eeeeee] dark:text-[#333333] font-black pl-16">
              2
            </span>
            <h2 className="text-2xl font-bold md:text-5xl w-full text-left z-10 text-headings dark:text-headings-dark">
              <span className="text-8xl text-primary">Create</span> rememberable
              links
            </h2>
            <p className="leading-loose text-[#808080] dark:text-secondary-dark z-10 text-base md:text-lg">
              With this app you’ll be able to create short links that will make
              the distribution of your content easy and effective.
            </p>
          </div>
          <div className="create flex flex-col justify-center items-start">
            <span className="number absolute text-[20em] text-[#eeeeee] dark:text-[#333333] font-black pl-16">
              3
            </span>
            <h2 className="text-2xl font-bold md:text-5xl w-full text-left z-10 text-headings dark:text-headings-dark">
              <span className="text-8xl text-primary">Boost</span> your
              campaign’s impact
            </h2>
            <p className="leading-loose text-[#808080] dark:text-secondary-dark z-10 text-base md:text-lg">
              The shorter your URL is, the faster and easier it is for your
              target audience to access your content.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
