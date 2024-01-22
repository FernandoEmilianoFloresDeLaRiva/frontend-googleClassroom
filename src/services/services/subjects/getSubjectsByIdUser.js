import { SUBJECTS_URL } from "../../../constants/subjects_url";
import { getWithoutAuth } from "../../api/getWithoutAuth";

export const getSubjectsByIdUser = async (id) => {
  try {
    const response = await getWithoutAuth(`${SUBJECTS_URL}/student/${id}`);
    return response;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
