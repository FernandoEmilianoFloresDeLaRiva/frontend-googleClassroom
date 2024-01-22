import { useEffect, useState } from "react";
import { getSubjectsByIdUser } from "../services/services/subjects/getSubjectsByIdUser";

export const useSubjectsByIdUser = (auth) => {
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {idUser} = auth
        if (idUser === 0) return;
        setIsLoading(true);
        const response = await getSubjectsByIdUser(idUser);
        if (subjects.length !== response.length) {
          setSubjects(response);
        }
        console.log("Datos obtenidos:", response);
        setIsLoading(false);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      }
    };
    fetchData();

    const intervalo = setInterval(fetchData, 10000);
    return () => {
      clearInterval(intervalo);
    };
  }, []);
  return { subjects, isLoading };
};
