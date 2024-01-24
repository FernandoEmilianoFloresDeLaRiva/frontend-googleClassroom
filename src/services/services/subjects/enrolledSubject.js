import { SUBJECTS_URL } from "../../../constants/subjects_url";
import { postWithAuth } from "../../api/postWithAuth";

export const enrolledSubject = async (code, idUser, token) => {
  try {
    const userReq = { code, idUser };
    const user = await postWithAuth(
      `${SUBJECTS_URL}/enrolledSubject`,
      token,
      userReq
    );
    return user;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
