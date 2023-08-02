import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// * Utilities
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

// * Components
import Link from "next/link";
import Option from "../../../components/links/Option";
import LinksLayout from "../../../components/links/LinksLayout";
import DeleteButton from "../../../components/links/Delete/DeleteButton";
import GenerateQRCodeButton from "../../../components/links/QRCode/GenerateQRCodeButton";

// * Database
import clientPromise from "../../../lib/mongodb";

const Dashboard = ({ links }) => {
  const router = useRouter();

  // * set selected link on first load :)
  const [selectedLink, setSelectedLink] = useState(
    links.find((i) => i._id === router.query.id)
  );

  // * change selected link
  // * the setSelectedLink is there to make sure the selectedLink state is updated since it doesn't refresh
  const selectLink = (e) => {
    setSelectedLink(links[e.target.id]);
    router.push("/dashboard/links/" + links[e.target.id]._id);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(
      "https://voltec.link/" + selectedLink.shortUrl
    );
    toast.success("Copied link to clipboard!", {
      position: "top-right",
      duration: 3000,
    });
  };

  const share = () => {
    if (navigator.share) {
      navigator.share();
    } else {
      toast.error("Coming soon for desktop browsers sidugjhsd");
    }
  };

  const timeZoneOptions = Intl.DateTimeFormat().resolvedOptions();
  const timeZone = timeZoneOptions.timeZone;
  console.log(timeZoneOptions);

  return (
    <LinksLayout utils={{ selectLink, links }}>
      <Head>
        <title>{selectedLink.name} | voltec.link</title>
      </Head>
      <motion.div
        initial={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-6"
      >
        <div className="heading">
          <div className="name-and-edit flex justify-between items-center">
            <h1 className="text-5xl font-bold tracking-tight text-headings dark:text-headings-dark">
              {selectedLink.name}
            </h1>
            <Link
              href={`/dashboard/edit/${selectedLink._id}`}
              className="edit border-2 rounded-xl text-neutral-400 border-[#e1e1e1] dark:border-neutral p-3 bg-white hover:bg-neutral-200"
            >
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
            </Link>
          </div>
          <p className="pt-2 text-neutral-400 dark:text-neutral-700">
            Created on{" "}
            <span className="font-semibold">
              {new Date(selectedLink.creationDate).toLocaleDateString()}
            </span>{" "}
            at{" "}
            <span className="font-semibold">
              {Intl.DateTimeFormat("en-US", {
                timeStyle: "short",
                timeZone: timeZone,
              }).format(new Date(selectedLink.creationDate))}
            </span>{" "}
            by{" "}
            {selectedLink.author && (
              <span className="font-bold text-primary underline cursor-pointer">
                {selectedLink.author}
              </span>
            )}
          </p>
        </div>
        <div className="copy-link-section flex justify-between items-center bg-white dark:bg-neutral-800 pl-6 p-4 border-[#E1E1E1] dark:border-neutral-700 border-2 rounded-xl">
          <a
            href={"/" + selectedLink.shortUrl}
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
            <GenerateQRCodeButton link={selectedLink.shortUrl} />
            <Option
              label="Share"
              onClick={share}
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
            <DeleteButton link={selectedLink} />
          </div>
        </div>
      </motion.div>
    </LinksLayout>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("url-shortener");

  const links = await db.collection("links").find({}).toArray();

  return {
    props: {
      links: JSON.parse(JSON.stringify(links)),
    },
  };
}
