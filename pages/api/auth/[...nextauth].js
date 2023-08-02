import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { userExistsInDatabase } from "../../../lib/auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export const authOptions = {
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/unauthorised",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = await userExistsInDatabase(user.email);

      // change back to isAllowedToSignIn
      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
