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

// * Database
import clientPromise from "../../../lib/mongodb";

const Dashboard = ({ links }) => {
  const router = useRouter();

  const [selectedLink, setSelectedLink] = useState(
    links.find((i) => i._id === router.query.id)
  );

  const selectLink = (e) => {
    setSelectedLink(links[e.target.id]);
    router.push("/dashboard/links/" + links[e.target.id]._id);
  };

  const handleNameChange = (e) => {
    setSelectedLink({ ...selectedLink, name: e.target.value });
  };

  const handleShortUrlChange = (e) => {
    setSelectedLink({ ...selectedLink, shortUrl: e.target.value });
  };

  const handleDestinationChange = (e) => {
    setSelectedLink({ ...selectedLink, destination: e.target.value });
  };

  const handleSave = async () => {
    const res = await fetch("/api/links/update-link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedLink),
    });

    const data = await res.json();

    if (data.message === "Short URL already exists") {
      toast.error("Short URL already exists");
    } else if (data.message === "Invalid short URL") {
      toast.error("Invalid short URL");
    } else {
      toast.success("Link updated");
      router.push("/dashboard/links/" + selectedLink._id);
    }
  };

  return (
    <LinksLayout utils={{ selectLink, links }}>
      <Head>
        <title>Editing {selectedLink.name} | voltec.link</title>
      </Head>
      <motion.div
        initial={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-6"
      >
        <div className="heading">
          <div className="name-and-edit gap-4 flex justify-between items-center">
            <input
              value={selectedLink.name}
              onChange={handleNameChange}
              placeholder="Name"
              type="text"
              className="text-5xl w-full bg-transparent border-b-4 border-primary font-bold tracking-tight text-headings dark:text-headings-dark"
            />
            <button
              onClick={handleSave}
              className="edit border-2 rounded-xl text-neutral-400 border-[#e1e1e1] dark:border-neutral py-3 px-4 bg-white hover:bg-neutral-200 flex justify-center items-center gap-2"
            >
              <span>Save</span>
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
          </div>
          <p className="pt-2 text-neutral-400 dark:text-neutral-700">
            Created {new Date(selectedLink.creationDate).toLocaleDateString()}{" "}
            at {new Date(selectedLink.creationDate).toLocaleTimeString()}
          </p>
        </div>
        <div className="copy-link-section flex gap-2 justify-start items-center bg-white dark:bg-neutral-800 pl-6 p-4 border-[#E1E1E1] dark:border-neutral-700 border-2 rounded-xl">
          <span className="text-xl">https://voltec.link</span>
          <span>/</span>
          <input
            type="text"
            onChange={handleShortUrlChange}
            placeholder="Short URL"
            className="text-xl border-b-4 border-primary dark:bg-transparent"
            value={selectedLink.shortUrl}
          />
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
            <input
              type="text"
              onChange={handleDestinationChange}
              placeholder="Destination"
              className="text-primary underline cursor-pointer border-b-4 border-primary bg-transparent w-full"
              value={selectedLink.destination}
            />
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
