import { getToken } from "next-auth/jwt";

export default async function handler(req, res) {
  const token = await getToken({ req });
  if (token) {
    res.send(token);
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }
}
