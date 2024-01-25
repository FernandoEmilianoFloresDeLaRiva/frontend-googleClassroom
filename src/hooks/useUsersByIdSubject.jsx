import { useEffect, useState } from "react";
import { getUserByIdSubject } from "../services/services/Users/getUsersByIdSubject";

export const useUsersByIdSubject = (idSubject) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        const res = await getUserByIdSubject(idSubject);
        console.log(res)
        if (users.length !== res.length) {
          setUsers(res);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      }
    };
    fetchUsers();
  }, [idSubject]);
  return { users, isLoading };
};
