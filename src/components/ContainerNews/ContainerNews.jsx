import React, { useContext } from "react";
import styles from "./ContainerNews.module.css";
import { SubjectContext } from "../../pages/ParticularHome/context/subject.context";
import TaskCard from "../TaskCard/TaskCard";

function ContainerNews({ tasks, loading }) {
  const { subject } = useContext(SubjectContext);
  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>{subject?.subjectName}</div>

      <div className={styles.code}>
        <span>Código de la clase</span>
        <span>{subject?.code}</span>
      </div>
      <div className={styles.containerTasks}>
        {loading
          ? "cargando datos..."
          : tasks.map((task) => {
              return (
                <TaskCard
                  text={`${subject?.teacherName} ha publicado una nueva tarea: ${task?.workName}`}
                  task = {task}
                />
              );
            })}
      </div>
    </div>
  );
}

export default ContainerNews;
