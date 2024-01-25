import { createAdaptedTask } from "../../../adapters/createAdaptedTask";
import { TASKS_URL } from "../../../constants/tasks_url";
import { getWithoutAuth } from "../../api/getWithoutAuth";

export const getFullfiledTasks = async (id) => {
  try {
    const response = await getWithoutAuth(`${TASKS_URL}/fullfiled/${id}`);
    if (response.length) return createAdaptedTask(response);
    return response;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
