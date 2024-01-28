import React, { useContext, useEffect, useState } from "react";
import styles from "./PendingsHome.module.css";
import { useSelector } from "react-redux";
import { SubjectContext } from "../ParticularHome/context/subject.context";
import { useGetTasks } from "../../hooks/useGetTasks";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import ContainerTasks from "../../components/ContainerTasks/ContainerTasks";
import { getPendingCount } from "../../services/services/tasks/getPendingCount";

function PendingsHome() {
  const auth = useSelector((state) => state.auth);
  const [indexComponent, setIndexComponent] = useState(0);
  const [countPendings, setCountPendings] = useState(0);
  const { subject } = useContext(SubjectContext);
  const { pendingTasks, fullfiledTasks, invalidTasks, isLoading } = useGetTasks(
    subject?.idSubject,
    auth?.idUser
  );
  useEffect(() => {
    const fetchCountPendingTasks = async () => {
      try {
        if (auth?.idUser === 0) return;
        const response = await getPendingCount(auth?.idUser);

        setCountPendings(response);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      } finally {
        setTimeout(fetchCountPendingTasks, 5000);
      }
    };
    fetchCountPendingTasks();
  }, []);
  const navTexts = [
    {
      text: "Asignado",
      arr: pendingTasks,
    },
    {
      text: "Sin entregar",
      arr: invalidTasks,
    },
    {
      text: "Hecho",
      arr: fullfiledTasks,
    },
  ];

  return (
    <LayoutHome subject={subject?.subjectName}>
      {countPendings !== 0 && (
        <div className={styles.count}>{countPendings}</div>
      )}
      <nav className={styles.navContainer}>
        {navTexts.map(({ text }, index) => {
          return (
            <a key={text} onClick={() => setIndexComponent(index)}>
              {text}
            </a>
          );
        })}
      </nav>
      <div className={styles.dataContainer}>
        {isLoading ? (
          "Cargando..."
        ) : navTexts[indexComponent]?.arr.length ? (
          <ContainerTasks
            tasks={
              navTexts[indexComponent]?.arr.length
                ? navTexts[indexComponent].arr
                : []
            }
          />
        ) : (
          "No hay tareas"
        )}
      </div>
    </LayoutHome>
  );
}

export default PendingsHome;
