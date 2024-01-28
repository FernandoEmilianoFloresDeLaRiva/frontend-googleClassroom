import React, { useContext } from "react";
import styles from "./TaskCard.module.css";
import TaskIcon from "../../assets/imgs/TaskIcon";
import { TaskContext } from "../../pages/ParticularTask/context/task.context";
import { useLocation } from "wouter";

function TaskCard({ text, subject, task }) {
  const { setTask } = useContext(TaskContext);
  const [location, setLocation] = useLocation();
  const handleClick = (e) => {
    e.preventDefault();
    setTask(task);
    setLocation("/task");
  };
  return (
    <article className={styles.container} onClick={handleClick}>
      <div className={styles.taskIcon}>
        <TaskIcon />
      </div>
      <div className={styles.taskTitle}>
        <span>{text}</span>
        <span>{subject}</span>
      </div>
    </article>
  );
}

export default TaskCard;
