import React, { useState } from "react";
import Layout from "../../components/Layout";
import { toast } from "react-hot-toast";

const Create = () => {
  const [destination, setDestination] = useState("");
  const [name, setName] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleShortUrlChange = (e) => {
    setShortUrl(e.target.value);
  };

  const createLink = async (e) => {
    e.preventDefault();

    const request = await fetch("/api/create-link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destination,
        name,
        shortUrl,
        creationDate: new Date().toISOString(),
      }),
    });

    console.log(request.status);

    if (request.status === 200) {
      toast.success("Successfully created link!");
    } else {
      const { message } = await request.json();
      toast.error("Uh oh, an error occurred: " + message);
    }
  };

  return (
    <Layout pageTitle={"Create"}>
      <form
        onSubmit={createLink}
        className="p-5 pt-8 mx-auto max-w-5xl flex flex-col justify-start items-start gap-6"
      >
        <h1 className="text-4xl font-bold tracking-tight">Create new</h1>
        <div className="destination-field flex flex-col w-full">
          <label
            htmlFor="destination"
            className="text-headings dark:text-headings-dark pb-2"
          >
            Destination
          </label>
          <input
            onChange={handleDestinationChange}
            required={true}
            value={destination}
            type="text"
            name="destination"
            id="destination"
            placeholder="https://example.com"
            className="border-2 border-neutral-100 dark:border-neutral-700 rounded-lg p-2 dark:bg-dark outline-none text-headings dark:text-headings-dark"
          />
        </div>
        <div className="name-field flex flex-col w-full">
          <label
            htmlFor="destination"
            className="text-headings dark:text-headings-dark pb-2"
          >
            Name
          </label>
          <input
            onChange={handleNameChange}
            required={true}
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="My VOLTEC link"
            className="border-2 border-neutral-100 dark:border-neutral-700 rounded-lg p-2 dark:bg-dark outline-none text-headings dark:text-headings-dark"
          />
        </div>
        <div className="custom-url-field flex flex-col w-full">
          <label
            htmlFor="destination"
            className="text-headings dark:text-headings-dark pb-2"
          >
            Custom URL
          </label>
          <div className="custom-url-create flex justify-center items-center gap-4">
            <p className="w-full border-2 border-neutral-100 dark:border-neutral-700 rounded-lg p-2 bg-neutral-100 dark:bg-dark outline-none text-primary underline dark:text-neutral-700">
              https://voltec.link
            </p>
            <p>/</p>
            <input
              onChange={handleShortUrlChange}
              required={true}
              value={shortUrl}
              type="text"
              name="name"
              id="name"
              placeholder="my-custom-url"
              className="w-full border-2 border-neutral-100 dark:border-neutral-700 rounded-lg p-2 dark:bg-dark outline-none text-headings dark:text-headings-dark"
            />
          </div>
        </div>
        <div className="submit flex flex-col w-full mt-4">
          <button
            type="submit"
            placeholder="My VOLTEC link"
            className="bg-primary text-white p-2 rounded-lg"
          >
            Create
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Create;
