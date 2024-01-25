import React from "react";
import styles from "./ContainerTasks.module.css";
import TaskCard from "../TaskCard/TaskCard";

function ContainerTasks({ tasks }) {
  return (
    <div className={styles.containerTasks}>
      <div className={styles.tasks}>
        {tasks.map((task) => {
          console.log(task);
          return (
            <TaskCard
              text={task?.workName}
              key={task?.idWork}
              subject={task?.subjectName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ContainerTasks;
