import { createUserInDatabase, userExistsInDatabase } from "../../../lib/auth";

export default async function handler(req, res) {
  console.log(req.body);

  if (req.method !== "POST") {
    res.status(405).send({ error: "Method not allowed" });
    return;
  }

  if (await userExistsInDatabase(req.body.email)) {
    return res.status(400).send({ error: "User already exists" });
  }

  console.log(req.body)

  const document = await createUserInDatabase({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    image: req.body.profilePicURL,
    email: req.body.email,
    dateJoined: new Date(),
    linksCreated: 0,
    role: req.body.role,
  });

  res
    .status(200)
    .send({ message: "uwu", result: JSON.parse(JSON.stringify(document)) });
}
