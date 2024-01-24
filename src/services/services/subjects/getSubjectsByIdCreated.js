import { createAdaptedSubject } from "../../../adapters/createAdaptedSubject";
import { SUBJECTS_URL } from "../../../constants/subjects_url";
import { getWithoutAuth } from "../../api/getWithoutAuth";

export const getSubjectsCreatedByIdUser = async (id) => {
  try {
    const response = await getWithoutAuth(`${SUBJECTS_URL}/teacher/${id}`);
    if (response.length) return createAdaptedSubject(response);
    return response;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
