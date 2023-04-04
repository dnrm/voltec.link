import React from "react";
import Layout from "../../components/Layout";
import Message from "../../components/links/Warning";

const users = () => {
  return (
    <Layout pageTitle={"Team Members"}>
      <div className="p-5">
        <Message
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          }
          label={"This feature is coming soon, since we are still in beta."}
        />
      </div>
    </Layout>
  );
};

export default users;
