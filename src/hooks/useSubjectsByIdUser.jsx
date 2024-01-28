import { useEffect, useState } from "react";
import { getSubjectsByIdUser } from "../services/services/subjects/getSubjectsByIdUser";
import { getSubjectsCreatedByIdUser } from "../services/services/subjects/getSubjectsByIdCreated";

export const useSubjectsByIdUser = (auth) => {
  const [subjectsCreated, setSubjectsCreated] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { idUser, token } = auth;
  useEffect(() => {
    const fetchDataSubjects = async () => {
      try {
        if (idUser === 0) return;
        setIsLoading(true);
        const response = await getSubjectsByIdUser(idUser, token);
        if (subjects.length !== response.length) {
          console.log(response);
          setSubjects(response);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      }
    };

    const fetchDataSubjectsCreated = async () => {
      try {
        if (idUser === 0) return;
        setIsLoading(true);
        const response = await getSubjectsCreatedByIdUser(idUser, token);
        if (subjects.length !== response.length) {
          console.log(response);
          setSubjectsCreated(response);
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
