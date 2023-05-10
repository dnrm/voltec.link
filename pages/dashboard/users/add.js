import { useState } from "react";
import Layout from "../../../components/Layout";

const Add = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <Layout pageTitle={"Add User"}>
      <div className="p-5 lg:p-8">
        <h1 className="text-4xl font-bold tracking-tight">User profile</h1>
        <hr className="my-4" />
        <div className="account-information-settings grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="first-name flex justify-start items-center gap-4">
            <h2 className="block text-xl tracking-tight text-neutral-500 dark:text-headings-dark">
              First name
            </h2>
            <input
              type="text"
              onChange={(e) => {
                setUserInfo({ ...userInfo, firstName: e.target.value });
              }}
              value={userInfo ? userInfo.firstName : ""}
              placeholder="Dean"
              className="border-2 flex-grow border-neutral-100 dark:border-neutral-700 rounded-lg p-2 dark:bg-dark outline-none text-headings dark:text-headings-dark"
            />
          </div>
          <div className="last-name flex justify-start items-center gap-4">
            <h2 className="text-xl tracking-tight text-neutral-500 dark:text-headings-dark">
              Last name
            </h2>
            <input
              type="text"
              onChange={(e) => {
                setUserInfo({ ...userInfo, lastName: e.target.value });
              }}
              value={userInfo ? userInfo.lastName : ""}
              placeholder="Kamen"
              className="border-2 flex-grow border-neutral-100 dark:border-neutral-700 rounded-lg p-2 dark:bg-dark outline-none text-headings dark:text-headings-dark"
            />
          </div>
          <div className="last-name flex justify-start items-center gap-4">
            <h2 className="text-xl tracking-tight text-neutral-500 dark:text-headings-dark">
              Profile picture URL
            </h2>
            <input
              type="text"
              onChange={(e) => {
                setUserInfo({ ...userInfo, profilePicURL: e.target.value });
              }}
              value={userInfo ? userInfo.profilePicURL : ""}
              placeholder="https://voltec.link/DeanKamen.png"
              className="border-2 flex-grow border-neutral-100 dark:border-neutral-700 rounded-lg p-2 dark:bg-dark outline-none text-headings dark:text-headings-dark"
            />
          </div>
          <div className="last-name flex justify-start items-center gap-4">
            <h2 className="text-xl tracking-tight text-neutral-500 dark:text-headings-dark">
              Role
            </h2>
            <select
              className="border-2 w-full border-neutral-100 dark:border-neutral-700 rounded-lg p-2 dark:bg-dark outline-none text-headings dark:text-headings-dark"
              name="appearance"
              id="appearance"
            >
              <option value="creator">Creator</option>
              <option value="admin">Admin</option>
              <option value="super-admin">Super Admin</option>
            </select>
          </div>
          <div className="save-button col-span-2">
            <div
            //   onClick={saveUserInfo}
              className={`border-2 w-full border-primary text-center text-primary hover:bg-primary hover:text-white transition-all duration-75 cursor-pointer py-3 px-16 rounded-lg text-xl`}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Add;
