import { SUBJECTS_URL } from "../../../constants/subjects_url";
import { postWithAuth } from "../../api/postWithAuth";

export const postSubject = async (subjectName, idUser, token) => {
  try {
    const userReq = { subjectName, idTeacher: idUser };
    const user = await postWithAuth(
      `${SUBJECTS_URL}/createSubject`,
      token,
      userReq
    );
    return user;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
