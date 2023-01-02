import React from "react";
import { signOut } from "next-auth/react";
import Layout from "../../components/Layout";

const settings = () => {
  return (
    <Layout pageTitle={"Settings"}>
      <h1>Settings</h1>
      <button onClick={() => signOut({ callbackUrl: "/"})}>sign out temp</button>
    </Layout>
  );
};

export default settings;
