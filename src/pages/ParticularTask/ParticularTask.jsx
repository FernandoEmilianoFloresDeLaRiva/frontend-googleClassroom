import React, { useContext } from "react";
import styles from "./ParticularTask.module.css";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import TaskIcon from "../../assets/imgs/TaskIcon";
import { TaskContext } from "./context/task.context";
import { useParticularTask } from "./hooks/useParticularTask";

function ParticularTask() {
  const { task: taskContext } = useContext(TaskContext);
  console.log(taskContext);
  const { task, isLoading, updateTask } = useParticularTask(taskContext?.idWork);
  return (
    <LayoutHome>
      {!isLoading && (
        <div className={styles.container}>
          <div className={styles.icon}>
            <span>
              <TaskIcon />
            </span>
          </div>
          <div className={styles.content}>
            <header>
              <h1>{task?.workName}</h1>
              <span>
                {task?.name} • {new Date(task?.date).toLocaleDateString()}
              </span>
            </header>
            <section className={styles.description}>
              <span>{task?.description}</span>
            </section>
          </div>
          <div className={styles.containerUpdate}>
            <div className={styles.containerSign}>
              <div className={styles.titles}>
                <span>Tu trabajo</span>
                <span>{task?.state ? "Entregado" : "Sin entregar"}</span>
              </div>
              {!task?.state && <button onClick={updateTask}>Realizar entrega</button>}
            </div>
          </div>
        </div>
      )}
    </LayoutHome>
  );
}

export default ParticularTask;
