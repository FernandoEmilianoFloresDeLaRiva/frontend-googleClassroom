import { TASKS_URL } from "../../../constants/tasks_url";
import { getWithoutAuth } from "../../api/getWithoutAuth";

export const getTask = async (id) => {
  try {
    const response = await getWithoutAuth(`${TASKS_URL}/task/${id}`);
    return response[0];
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
