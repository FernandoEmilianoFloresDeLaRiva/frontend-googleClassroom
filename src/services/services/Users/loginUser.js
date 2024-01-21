import { USERS_URL } from "../../../constants/users_url";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const loginUser = async (userReq) => {
  try {
    const user = await postWithoutAuth(`${USERS_URL}/login`, userReq);
    return user;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
