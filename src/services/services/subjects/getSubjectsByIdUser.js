import { createAdaptedSubject } from "../../../adapters/createAdaptedSubject";
import { SUBJECTS_URL } from "../../../constants/subjects_url";
import { getWithAuth } from "../../api/getWithAuth";

export const getSubjectsByIdUser = async (id, token) => {
  try {
    const response = await getWithAuth(`${SUBJECTS_URL}/student/${id}`, token);
    if (response.length) return createAdaptedSubject(response);
    return response;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
