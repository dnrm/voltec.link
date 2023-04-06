import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Links } from "../context/linkscontext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Links>
        <Component {...pageProps} />
        <Toaster />
      </Links>
    </SessionProvider>
  );
}

export default MyApp;
