import { USERS_URL } from "../../../constants/users_url";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const getUserByEmail = async (email) => {
  try {
    const user = await postWithoutAuth(USERS_URL, email);
    if (user.length) {
      console.log(user)
      return user[0];
    }
    return null;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
