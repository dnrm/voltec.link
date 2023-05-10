import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
import reservedUrls from "../../../lib/reserved";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("url-shortener");

  if (req.method !== "POST") {
    res.status(405).send({ message: "Method not allowed" });
    return;
  }

  // ! If URL with same name exists, return error
  if (req.body.shortUrl) {
    const existingLink = await db
      .collection("links")
      .findOne({ shortUrl: req.body.shortUrl });

    if (existingLink && existingLink._id.toString() != req.body._id) {
      res.status(400).send({ message: "Short URL already exists" });
      return;
    }
  }

  // ! Sanitize input
  if (
    reservedUrls.includes(req.body.shortUrl) ||
    req.body.shortUrl.includes("/") ||
    req.body.shortUrl.includes(" ")
  ) {
    res.status(400).send({ message: "Invalid short URL" });
    return;
  }

  const document = await db.collection("links").updateOne(
    { _id: new ObjectId(req.body._id) },
    {
      $set: {
        destination: req.body.destination,
        name: req.body.name,
        shortUrl: req.body.shortUrl,
        creationDate: req.body.creationDate,
        clicks: 0,
      },
    }
  );

  res.status(200).send({ message: "uwu" });
}
