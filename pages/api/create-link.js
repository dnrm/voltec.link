import clientPromise from "../../lib/mongodb";
import reservedUrls from '../../lib/reserved'

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("url-shortener");

  if (req.method !== "POST") {
    res.status(405).send({ message: "Method not allowed" });
    return;
  }

  if (req.body.shortUrl) {
    const existingLink = await db
      .collection("links")
      .findOne({ shortUrl: req.body.shortUrl });

    if (existingLink) {
      res.status(400).send({ message: "Short URL already exists" });
      return;
    }
  }

  if (
    reservedUrls.includes(req.body.shortUrl) ||
    req.body.shortUrl.includes("/") ||
    req.body.shortUrl.includes(" ")
  ) {
    res.status(400).send({ message: "Invalid short URL" });
    return;
  }

  const document = await db.collection("links").insertOne({
    destination: req.body.destination,
    name: req.body.name,
    shortUrl: req.body.shortUrl,
    creationDate: req.body.creationDate,
    clicks: 0,
  });

  res.status(200).send({ message: "uwu" });
}
