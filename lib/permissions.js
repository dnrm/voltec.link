import { getUserFromDatabase } from "./auth";

const permissions = {
  admin: [
    "create:users",
    "read:users",
    "update:users",
    "delete:users",
    "create:links",
    "read:links",
    "update:links",
    "delete:links",
  ],
  creator: ["create:links", "read:links", "update:links", "delete:links"],
};

export const hasPermissionTo = async (email, permissionNeeded) => {
  try {
    const user = await getUserFromDatabase(email);

    switch (user.role) {
      case "ADMIN":
        return permissions.admin.includes(permissionNeeded);

      case "CREATOR":
        return permissions.creator.includes(permissionNeeded);

      case "SUPER_ADMIN":
        return true;

      default:
        return false;
    }
  } catch (err) {
    console.log("Error retrieving user from database: ", err);
  }
};
