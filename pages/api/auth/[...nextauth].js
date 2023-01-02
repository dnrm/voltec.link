import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

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
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user.email.endsWith("@tec.mx"));
      const isAllowedToSignIn = user.email.endsWith("@tec.mx") ? true : false;

      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
