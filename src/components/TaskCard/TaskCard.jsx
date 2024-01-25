import React from "react";
import styles from "./TaskCard.module.css";
import TaskIcon from "../../assets/imgs/TaskIcon";

function TaskCard({text, subject}) {
  return (
    <article className={styles.container}>
      <div className={styles.taskIcon}>
        <TaskIcon />
      </div>
      <div className={styles.taskTitle}>
        <span>
          {text}
        </span>
        <span>{subject}</span>
      </div>
    </article>
  );
}

export default TaskCard;
