import { TASKS_URL } from "../../../constants/tasks_url";
import { updateWithoutAuth } from "../../api/updateWithoutAuth";

export const updateTask = async (id) => {
  try {
    const user = await updateWithoutAuth(`${TASKS_URL}/${id}`, {});
    return user;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw new Error(err.message);
  }
};
