import React from "react";
import { signOut } from "next-auth/react";
import Layout from "../../components/Layout";
import Image from "next/image";

const settings = () => {
  return (
    <Layout pageTitle={"Settings"}>
      <h1>da settings für dein Konto</h1>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="border-4 p-5 rounded-full hover:bg-neutral-100"
      >
        temporary sign out button wuwu
      </button>
    </Layout>
  );
};

export default settings;
