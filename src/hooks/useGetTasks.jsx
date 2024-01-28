import { useEffect } from "react";
import { useState } from "react";
import { getTasksByIdSubject } from "../services/services/tasks/getTasksByIdSubject";
import { getPendingTasks } from "../services/services/tasks/getPendingTasks";
import { getFullfiledTasks } from "../services/services/tasks/getFullfiledTasks";
import { getInvalidTasksByIdUser } from "../services/services/tasks/getInvalidTasksByIdUser";
import { getPendingCount } from "../services/services/tasks/getPendingCount";

export const useGetTasks = (idSubject = 0, idUser) => {
  const [tasks, setTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [fullfiledTasks, setFullfiledTasks] = useState([]);
  const [invalidTasks, setInvalidTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const response = await getTasksByIdSubject(idSubject);
        if (tasks.length !== response.length) {
          setTasks(response);
        }
        console.log("Datos obtenidos:", response);
        setIsLoading(false);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      }
    };
    const fetchPendingTasks = async () => {
      try {
        setIsLoading(true);
        const response = await getPendingTasks(idUser);
        if (pendingTasks.length !== response.length) {
          setPendingTasks(response);
        }
        console.log("pending tasks:");
        console.log("Datos obtenidos:", response);
        setIsLoading(false);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      }
    };
    const fetchFullfiledTasks = async () => {
      try {
        setIsLoading(true);
        const response = await getFullfiledTasks(idUser);
        if (fullfiledTasks.length !== response.length) {
          setFullfiledTasks(response);
        }
        console.log("fullfiled tasks:");
        console.log("Datos obtenidos:", response);
        setIsLoading(false);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      }
    };
    const fetchInvalidTasks = async () => {
      try {
        setIsLoading(true);
        const response = await getInvalidTasksByIdUser(idUser);
        if (invalidTasks.length !== response.length) {
          setInvalidTasks(response);
        }
        console.log("invalid tasks:");
        console.log("Datos obtenidos:", response);
        setIsLoading(false);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      }
    };

    fetchTasks();
    fetchPendingTasks();
    fetchFullfiledTasks();
    fetchInvalidTasks();
    const intervalo1 = setInterval(fetchTasks, 5000);
    const intervalo2 = setInterval(fetchPendingTasks, 5000);
    const intervalo3 = setInterval(fetchFullfiledTasks, 5000);
    const intervalo4 = setInterval(fetchInvalidTasks, 5000);
    return () => {
      clearInterval(intervalo1);
      clearInterval(intervalo2);
      clearInterval(intervalo3);
      clearInterval(intervalo4);
    };
  }, [idSubject]);
  return {
    tasks,
    pendingTasks,
    fullfiledTasks,
    invalidTasks,
    isLoading,
  };
};
