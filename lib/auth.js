import clientPromise from "./mongodb";

export const userExistsInDatabase = async (email) => {
  const client = await clientPromise;
  const db = client.db("url-shortener");

  const find = db
    .collection("users")
    .findOne({ email: email }, (err, result) => {
      if (err) throw err;
      if (result) return true;
      return false;
    });

  return find;
};

export const getUserFromDatabase = async (email) => {
  const client = await clientPromise;
  const db = client.db("url-shortener");

  try {
    const document = db.collection("users").findOne({ email: email });

    if (document) {
      return document;
    } else {
      return { error: "User not found" };
    }
  } catch (err) {
    return { error: err };
  }
};

export const createUserInDatabase = async (user) => {
  const client = await clientPromise;
  const db = client.db("url-shortener");

  try {
    const document = await db.collection("users").insertOne(user);
    return document;
  } catch (err) {
    return { error: err };
  }
};
