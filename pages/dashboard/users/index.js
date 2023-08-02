import React from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";
import ListUser from "../../../components/users/Users/ListUser";
import Head from "next/head";
import clientPromise from "../../../lib/mongodb";
import { useSession } from "next-auth/react";

import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]";
import { getUserFromDatabase } from "../../../lib/auth";

const Users = ({ users, role }) => {
  const isAdmin = role === "ADMIN" || role === "SUPER_ADMIN" || role === "CREATOR";
  console.log(role);

  return (
    <Layout pageTitle={"Team Members"}>
      <Head>
        <title>Users | voltec.link</title>
      </Head>
      <div className="p-5 lg:p-8">
        {isAdmin ? (
          <div className="top-actions">
            <Link
              href="/dashboard/users/add"
              className="flex justify-center items-center gap-2 border-2 border-primary rounded-xl p-4 font-medium text-primary bg-[#d3eaf6] hover:bg-primary hover:text-white text-xl transition-all duration-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="leading-none">Add user</span>
            </Link>
          </div>
        ) : null}
        <table
          className={`users-table border-2 border-[#E1E1E1] ${
            !isAdmin ? "mt-2" : "mt-8"
          } w-full rounded-xl`}
        >
          <thead className="table-header bg-neutral-100 w-full">
            <tr className="border-b-2 border-gray-200">
              <td className="p-5 gap-2">
                <div className="flex justify-start gap-2 items-center">
                  <span className="text-lg font-medium">Name</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </td>
              <td className="p-5 gap-2">
                <div className="flex justify-start gap-2 items-center">
                  <span className="text-lg font-medium">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </td>
              <td className="p-5 gap-2">
                <div className="flex justify-start gap-2 items-center">
                  <span className="text-lg font-medium">Role</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </td>
              <td className="p-5 gap-2">
                <div className="flex justify-start gap-2 items-center">
                  <span className="text-lg font-medium">Date joined</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </td>
              <td className="p-5 gap-2">
                <div className="flex justify-start gap-2 items-center">
                  <span className="text-lg font-medium">Links created</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </td>
              <td />
            </tr>
          </thead>
          <tbody className="table-body">
            {users.length > 0 ? (
              users.map((user, index) => <ListUser key={index} user={user} />)
            ) : (
              <tr>
                <td colSpan={5} className="p-5">
                  <div className="flex justify-center items-center flex-col text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-24 h-24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                    <p>No users found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Users;

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("url-shortener");

  const session = getServerSession(context.req, context.res, authOptions);
  const { user } = await session;

  const currentUser = await getUserFromDatabase(user.email);

  const users = await db.collection("users").find({}).toArray();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
      role: currentUser.role,
    },
  };
}
