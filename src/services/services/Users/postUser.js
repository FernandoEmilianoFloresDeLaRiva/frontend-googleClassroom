import { USERS_URL } from "../../../constants/users_url";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const postUser = async (userReq) => {
  try {
    const user = await postWithoutAuth(`${USERS_URL}/register`, userReq);
    return user;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
