import clientPromise from "../../../lib/mongodb";
import { createUserInDatabase, userExistsInDatabase } from "../../../lib/auth";
import { use } from "react";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("url-shortener");

  if (req.method !== "POST") {
    res.status(405).send({ message: "Method not allowed" });
    return;
  }

  if (userExistsInDatabase(req.body.email)) {
    res.status(400).send({ message: "User already exists" });
    return;
  }

  const document = await createUserInDatabase({
    name: req.body.name,
    image:
      req.body.profilePicURL,
    email: "a01286980@tec.mx",
    dateJoined: new Date(),
    linksCreated: 0,
    role: "SuperAdmin",
  });

  res
    .status(200)
    .send({ message: "uwu", result: JSON.parse(JSON.stringify(document)) });
}
