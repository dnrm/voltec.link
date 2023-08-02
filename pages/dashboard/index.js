import React from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

const index = () => {
  return <meta http-equiv="Refresh" content="0; url='/dashboard/links'" />;
};

export default index;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log("Session: " + session);

  return {
    props: { session },
  }
}

// ** Temporary redirect while I develop the dashboard **
