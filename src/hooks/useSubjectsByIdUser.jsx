import { useEffect, useState } from "react";
import { getSubjectsByIdUser } from "../services/services/subjects/getSubjectsByIdUser";
import { getSubjectsCreatedByIdUser } from "../services/services/subjects/getSubjectsByIdCreated";
import { getPendingCount } from "../services/services/tasks/getPendingCount";

export const useSubjectsByIdUser = (auth) => {
  const [countPendings, setCountPendings] = useState(0)
  const [subjectsCreated, setSubjectsCreated] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchDataSubjects = async () => {
      try {
        const { idUser } = auth;
        if (idUser === 0) return;
        setIsLoading(true);
        const response = await getSubjectsByIdUser(idUser);
        if (subjects.length !== response.length) {
          setSubjects(response);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      }
    };

    const fetchDataSubjectsCreated = async () => {
      try {
        const { idUser } = auth;
        if (idUser === 0) return;
        setIsLoading(true);
        const response = await getSubjectsCreatedByIdUser(idUser);
        if (subjects.length !== response.length) {
          setSubjectsCreated(response);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      }
    };

    const fetchCountPendingTasks = async () => {
      try {
        const { idUser } = auth;
        if (idUser === 0) return;
        setIsLoading(true);
        const response = await getPendingCount(idUser);
        if (countPendings.length !== response) {
          setCountPendings(response);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      }
    };
    fetchDataSubjects();
    fetchDataSubjectsCreated();

    const intervalo1 = setInterval(fetchDataSubjects, 10000);
    const intervalo2 = setInterval(fetchDataSubjectsCreated, 10000);
    return () => {
      clearInterval(intervalo1);
      clearInterval(intervalo2);
    };
  }, []);
  return { subjects, isLoading, subjectsCreated };
};
