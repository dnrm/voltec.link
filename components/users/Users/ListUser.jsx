import React from "react";
import { useSession } from "next-auth/react";

const roles = {
  CREATOR: "Creator",
  SUPER_ADMIN: "Super admin",
  ADMIN: "Admin",
  USER: "User",
  MEMBER: "Member"
}

const ListUsers = ({ user }) => {
  const session = useSession();

  return (
    <tr className=" p-4 border-b-2 border-gray-200 hover:bg-gray-100">
      <td className="p-5 gap-2">
        <div className="flex justify-start gap-2 items-center">
          <img
            src={user.image}
            alt="user"
            className="w-12 h-12 rounded-full object-cover border-2 border-[#E1E1E1]"
          />
          <span className="text-sm lg:text-lg font-medium inline cursor-pointer hover:underline">
            {user.firstName} {user.lastName}{" "}
            {session.status === "authenticated" &&
            user.email == session.data.user.email
              ? "(You)"
              : null}
          </span>
        </div>
      </td>
      <td className="p-5 gap-2">
        <a
          href={"mailto:" + user.email}
          className="text-sm lg:text-lg font-medium text-primary hover:underline cursor-pointer"
        >
          {user.email}
        </a>
      </td>
      <td className="p-5 gap-2">
        <span className="text-sm lg:text-lg font-medium bg-primary rounded-xl py-1 px-2 text-white">
          {roles[user.role]}
        </span>
      </td>
      <td className="p-5 gap-2">
        <span className="text-sm lg:text-lg font-medium">
          {new Date(user.dateJoined).toLocaleDateString()}
        </span>
      </td>
      <td className="p-5 gap-2">
        <span className="text-sm lg:text-lg font-medium">
          {Intl.NumberFormat().format(user.linksCreated)}
        </span>
      </td>
      <td>
        {session.status === "authenticated" &&
        user.email !== session.data.user.email ? (
          <div className="inline-block cursor-pointer edit-button border-2 rounded-xl text-neutral-400 border-[#e1e1e1] dark:border-neutral p-3 bg-white hover:bg-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        ) : null}
      </td>
    </tr>
  );
};

export default ListUsers;
