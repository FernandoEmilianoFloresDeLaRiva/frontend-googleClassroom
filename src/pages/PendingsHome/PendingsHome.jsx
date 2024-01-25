import React, { useContext, useState } from "react";
import styles from "./PendingsHome.module.css";
import { useSelector } from "react-redux";
import { SubjectContext } from "../ParticularHome/context/subject.context";
import { useGetTasks } from "../../hooks/useGetTasks";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import ContainerTasks from "../../components/ContainerTasks/ContainerTasks";

function PendingsHome() {
  const auth = useSelector((state) => state.auth);
  const [indexComponent, setIndexComponent] = useState(0);
  const { subject } = useContext(SubjectContext);
  const { pendingTasks, fullfiledTasks, invalidTasks, isLoading } = useGetTasks(
    subject?.idSubject,
    auth?.idUser
  );
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
