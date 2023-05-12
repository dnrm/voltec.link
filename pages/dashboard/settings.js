import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { signOut } from "next-auth/react";

const Settings = () => {
  const session = useSession();

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (session.data) {
      setUserInfo({
        firstName: session.data.user.name.split(" ")[0].trim(),
        lastName: session.data.user.name.split(" ")[1].trim(),
      });
    }
  }, [session]);

  const saveUserInfo = () => {
    console.log(userInfo);
  };

  const setAppearance = (e) => {
    console.log("set appearance");

    switch (e.target.value) {
      case "light":
        document.documentElement.classList.remove("dark");
        break;

      case "dark":
        document.documentElement.classList.add("dark");
        break;

      case "system":
        if (
          window &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        break;
    }
  };

  return (
    <Layout pageTitle={"Settings"}>
      <Head>
        <title>Settings | voltec.link</title>
      </Head>
      <div className="p-5 lg:p-8 flex flex-col gap-8">
        <div className="account-settings-group">
          <h1 className="text-4xl font-bold tracking-tight text-headings dark:text-headings-dark">
            Account
          </h1>
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
            <div className="save-button">
              <div
                onClick={saveUserInfo}
                className={`border-2 border-primary text-center text-primary hover:bg-primary hover:text-white transition-all duration-75 cursor-pointer py-3 px-16 rounded-lg text-xl inline-block`}
              >
                Save
              </div>
            </div>
          </div>
        </div>
        <div className="app-settings-group">
          <h1 className="text-4xl font-bold tracking-tight text-headings dark:text-headings-dark">
            Application
          </h1>
          <hr className="my-4" />
          <div className="application-setting">
            <div className="dark-mode flex justify-start items-center gap-4">
              <h2 className="text-xl tracking-tight text-neutral-500 dark:text-headings-dark">
                Appearance
              </h2>
              <select
                className="border-2 border-neutral-100 dark:border-neutral-700 rounded-lg p-2 dark:bg-dark outline-none text-headings dark:text-headings-dark"
                name="appearance"
                id="appearance"
                onChange={setAppearance}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
          </div>
        </div>
        <div className="actions-group">
          <h1 className="text-4xl font-bold tracking-tight text-headings dark:text-headings-dark">
            Actions
          </h1>
          <hr className="my-4" />
          <div className="sign-out-button">
            <div
              onClick={() => signOut()}
              className={`border-2 border-red-400 "text-center text-red-400 hover:bg-red-400 hover:text-white transition-all duration-75 cursor-pointer py-3 px-16 rounded-lg text-xl inline-block`}
            >
              Sign out
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
