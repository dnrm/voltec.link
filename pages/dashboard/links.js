import Link from "next/link";
import React, { useState, useEffect } from "react";

import { toast } from "react-hot-toast";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Option from "../../components/links/Option";

import clientPromise from "../../lib/mongodb";

const Dashboard = ({ linksFromServer }) => {
  const [links, setLinks] = useState(linksFromServer);
  const [selectedLink, setSelectedLink] = useState({});

  const selectLink = (e) => {
    setSelectedLink(links[e.target.id]);
  };

  const copyLink = () => {
    navigator.clipboard.writeText('https://voltec.link/' + selectedLink.shortUrl);
    toast.success("Copied link to clipboard!", {
      position: "top-right",
      duration: 3000,
    });
  };

  return (
    <Layout pageTitle={"Links"}>
      <div className="links-page h-[78vh]">
        {links.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">
            <div className="col-span-1 border-r-2 border-[#E1E1E1]">
              {links.map((link, index) => {
                return (
                  <div
                    key={index}
                    id={index}
                    onClick={selectLink}
                    className={`${
                      selectedLink.id == link.id ? "bg-white" : "bg-[#f6f6f6]"
                    } link border-y-2 first:border-t-0 even:border-y-0 last:border-b-2 border-[#E1E1E1] border-collapse p-5`}
                  >
                    <p className="text-xl text-headings dark:text-headings-dark pointer-events-none">
                      {link.name}
                    </p>
                    <div className="stats flex justify-between items-center pointer-events-none">
                      <p className="text-primary underline">
                        https://voltec.link/{link.shortUrl}
                      </p>
                      <p className="text-neutral-400 dark:text-neutral-700">
                        {new Intl.NumberFormat("en-UK", {
                          notation: "compact",
                        }).format(link.clicks)}{" "}
                        clicks
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-span-1 md:col-span-2 p-8 h-full bg-neutral-100">
              {Object.keys(selectedLink).length != 0 ? (
                <div className="flex flex-col gap-6">
                  <div className="heading">
                    <div className="name-and-edit flex justify-between items-center">
                      <h1 className="text-5xl font-bold tracking-tight text-headings dark:text-headings-dark">
                        {selectedLink.name}
                      </h1>
                      <button className="border-2 rounded-xl text-neutral-400 border-[#e1e1e1] dark:border-neutral p-3 bg-white hover:bg-neutral-200">
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
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="pt-2 text-neutral-400 dark:text-neutral-700">
                      Created {new Date(selectedLink.creationDate).toLocaleDateString()} at {new Date(selectedLink.creationDate).toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="copy-link-section flex justify-between items-center bg-white dark:bg-neutral-800 pl-6 p-4 border-[#E1E1E1] dark:border-neutral-700 border-2 rounded-xl">
                    <a
                      href={'/' + selectedLink.shortUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-2xl font-bold text-primary underline"
                    >
                      {"https://voltec.link/" + selectedLink.shortUrl}
                    </a>
                    <button
                      onClick={copyLink}
                      className="flex justify-center items-center gap-2 border-2 rounded-xl text-neutral-400 border-[#e1e1e1] dark:border-neutral p-3 bg-white hover:bg-neutral-100"
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
                          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                        />
                      </svg>
                      Copy
                    </button>
                  </div>
                  <div className="destination flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Destination</h2>
                    <div className="destination-data flex justify-start items-center gap-2">
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
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                      <a
                        href={selectedLink.destination}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline cursor-pointer"
                      >
                        {selectedLink.destination}
                      </a>
                    </div>
                  </div>
                  <div className="options">
                    <h2 className="text-2xl font-bold">Options</h2>
                    <div className="options-data py-2 flex gap-2">
                      <Option
                        label="Generate QR Code"
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
                              d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                            />
                          </svg>
                        }
                        onClick={() =>
                          toast.error("This feature is coming soon :)")
                        }
                      />
                      <Option
                        label="Share"
                        onClick={() =>
                          toast.success(
                            <a
                              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                              target={"_blank"}
                              rel="noreferrer"
                              className="text-primary underline cursor-pointer"
                            >
                              https://www.youtube.com/watch?v=dQw4w9WgXcQ
                            </a>
                          )
                        }
                        color="yellow"
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
                              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                            />
                          </svg>
                        }
                      />
                      <Option
                        label="Delete"
                        onClick={() => toast.error("deleteee 🤯🤯🤯")}
                        className={
                          "bg-red-100 text-red-400 border-red-300 hover:bg-red-200"
                        }
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
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        }
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="no-selected-link h-full w-full flex flex-col justify-center items-center gap-8">
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

                  <h1 className="text-2xl md:text-4xl tracking-tight font-bold">
                    Select a link
                  </h1>
                </div>
              )}
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

export default Dashboard;

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("url-shortener");

  const links = await db.collection("links").find({}).toArray();

  return {
    props: {
      linksFromServer: JSON.parse(JSON.stringify(links)),
    },
  };
}
