import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { userExistsInDatabase } from "../../../lib/auth";

export const authOptions = {
  providers: [
    GoogleProvider({
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
    async signIn({ user }) {
      const isAllowedToSignIn = await userExistsInDatabase(user.email);

      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
