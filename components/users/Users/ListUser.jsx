import React from "react";

const ListUsers = ({ user }) => {
  return (
    <tr className=" p-4 border-b-2 border-gray-200">
      <td className="p-5 gap-2">
        <div className="flex justify-start gap-2 items-center">
          <img
            src={user.image}
            alt="user"
            className="w-12 h-12 rounded-full object-cover border-2 border-[#E1E1E1]"
          />
          <span className="text-sm lg:text-lg font-medium inline">
            {user.firstName} {user.lastName}
          </span>
        </div>
      </td>
      <td className="p-5 gap-2">
        <span className="text-sm lg:text-lg font-medium">{user.email}</span>
      </td>
      <td className="p-5 gap-2">
        <span className="text-sm lg:text-lg font-medium bg-primary rounded-xl py-1 px-2 text-white">
          {user.role}
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
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
};

export default ListUsers;
