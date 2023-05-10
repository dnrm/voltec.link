import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("url-shortener");

  if (req.method !== "DELETE") {
    res.status(405).send({ message: "Method not allowed" });
    return;
  }

  if (!req.body) {
    res.status(400).send({ message: "Bad request" });
    return;
  }

  const deleted = await db
    .collection("links")
    .deleteOne({ _id: ObjectId(req.body._id) });


  if (deleted.deletedCount === 0) {
    res.status(404).send({ message: "Not found" });
    return;
  } else {
    res.status(200).send({ message: "Deleted" });
    return;
  }
}
