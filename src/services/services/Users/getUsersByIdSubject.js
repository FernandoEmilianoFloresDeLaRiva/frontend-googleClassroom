import { USERS_URL } from "../../../constants/users_url";
import { getWithoutAuth } from "../../api/getWithoutAuth";

export const getUserByIdSubject = async (id) => {
  try {
    const response = await getWithoutAuth(`${USERS_URL}/subject/${id}`);
    return response;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
