import React from "react";
import { useRouter } from "next/router";
import clientPromise from "../lib/mongodb";

const Link = ({ notFound, link }) => {
  return (
    <div>
      {notFound ? <h1>Link not found</h1> : <h1>{link.destination}</h1>}
    </div>
  );
};

export default Link;

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("url-shortener");

  const link = await db
    .collection("links")
    .findOne({ shortUrl: context.query.link });

  if (!link) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    redirect: {
      destination: link.destination,
      permanent: false,
    },
  };
}
