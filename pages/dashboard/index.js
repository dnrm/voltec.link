import React from "react";

const index = () => {
  return <meta http-equiv="Refresh" content="0; url='/dashboard/links'" />;
};

export default index;

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/dashboard/links",
      permanent: true,
    },
  };
}

// ** Temporary redirect while I develop the dashboard **
