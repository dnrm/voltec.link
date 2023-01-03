import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Link from "next/link";

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState({});

  const fetchLinks = async () => {
    return [
      {
        id: 1,
        name: "Google",
        url: "https://google.com",
        shortUrl: "https://voltec.link/google",
        creationDate: new Date().toDateString(),
        clicks: 6483,
      },
      {
        id: 2,
        name: "Instagram",
        url: "https://www.instagram.com/voltecrobotics6647/",
        shortUrl: "https://voltec.link/instagram",
        creationDate: new Date().toDateString(),
        clicks: 2394857,
      },
      {
        id: 3,
        name: "dani's website",
        url: "https://medina.dev/",
        shortUrl: "https://voltec.link/medina",
        creationDate: new Date().toDateString(),
        clicks: 100222,
      },
    ];
  };

  const selectLink = (e) => {
    setSelectedLink(links[e.target.id]);
  };

  useEffect(() => {
    const fetchLinkData = async () => {
      const links = await fetchLinks();
      setLinks(links);
    };
    fetchLinkData();
  }, []);

  return (
    <Layout pageTitle={"Links"}>
      <div className="links-page h-[75vh]">
        {links.length > 0 ? (
          <div className="grid grid-cols-4 w-full h-full">
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
                      <p className="text-primary underline">{link.shortUrl}</p>
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
            <div className="col-span-3 p-8">
              {selectedLink != {} ? (
                <>
                  <h1 className="text-5xl font-bold tracking-tight text-headings dark:text-headings-dark">
                    {selectedLink.name}
                  </h1>
                  <p className="py-2 text-neutral-400 dark:text-neutral-700">Created {selectedLink.creationDate}</p>
                </>
              ) : null}
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
