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
    const res = await fetch("/api/update-link", {
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
            className="text-xl border-b-4 border-primary"
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
        <div className="options">
          <div className="options-data py-2 flex gap-2">
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
