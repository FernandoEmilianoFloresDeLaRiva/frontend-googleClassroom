import { useEffect, useState } from "react";
import { getTask } from "../../../services/services/tasks/getTask";
import { useLocation } from "wouter";
import {updateTask} from "../../../services/services/tasks/updateTasks"

export const useParticularTask = (id) => {
  const [location, setLocation] = useLocation();
  const [task, setTask] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchTask = async () => {
      try {
        const res = await getTask(id);
        console.log(res);
        setTask(res);
        setIsLoading(false);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      }
    };
    fetchTask();
  }, [id]);

  const fetchUpdateTask = async (e) => {
    try {
      e.preventDefault();
      const res = await updateTask(id);
      setLocation("/home");
    } catch (err) {
      console.error("Error al obtener datos:", err);
    }
  };

  return { task, isLoading, updateTask: fetchUpdateTask };
};
