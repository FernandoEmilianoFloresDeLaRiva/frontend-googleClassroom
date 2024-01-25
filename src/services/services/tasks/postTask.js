import { TASKS_URL } from "../../../constants/tasks_url";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const postTask = async (taskReq) => {
  try {
    console.log(taskReq)
    const user = await postWithoutAuth(`${TASKS_URL}`, taskReq);
    return user;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw new Error(err.message);
  }
};
