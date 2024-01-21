import { USERS_URL } from "../../../constants/users_url";
import { postWithoutAuth } from "../../api/postWithoutAuth";
import { createAdaptedUser } from "../../../adapters/createAdaptedUser";

export const getUserByEmail = async (email) => {
  try {
    const user = await postWithoutAuth(USERS_URL, email);
    if (user.length) {
      const adaptedUser = createAdaptedUser(user[0]);
      return adaptedUser;
    }
    return null;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
