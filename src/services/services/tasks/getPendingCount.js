import { TASKS_URL } from "../../../constants/tasks_url";
import { getWithoutAuth } from "../../api/getWithoutAuth";

export const getPendingCount = async (id) => {
  try {
    //long pulling
    const response = await getWithoutAuth(`${TASKS_URL}/pending/count/${id}`);
    console.log(response)
    return response;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
