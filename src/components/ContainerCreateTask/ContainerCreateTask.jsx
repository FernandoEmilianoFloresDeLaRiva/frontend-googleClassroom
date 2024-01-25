import React, { useState } from "react";
import styles from "./ContainerCreateTask.module.css";
import Plus from "../../assets/imgs/Plus";
import CreateTask from "../../pages/ParticularHome/components/CreateTask/CreateTask";
import ContainerTasks from "../ContainerTasks/ContainerTasks";

function ContainerCreateTask({ tasks, loading }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      {loading ? (
        "Cargando datos..."
      ) : (
        <div className={styles.containerCreate}>
          <button className={styles.addTask} onClick={handleOpen}>
            <Plus />
            <span>Crear</span>
          </button>
          <ContainerTasks tasks={tasks} />
        </div>
      )}
      {isOpen && <CreateTask handleOpen={handleOpen} />}
    </div>
  );
}

export default ContainerCreateTask;
