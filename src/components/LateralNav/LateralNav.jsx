import React from "react";
import styles from "./LateralNav.module.css";
import Home from "../../assets/imgs/home.jsx";
import Task from "../../assets/imgs/Task.jsx";
import DefaultLateralUl from "../DefaulLateralUl/DefaultLateralUl.jsx";
import LiSubject from "../LiSubject/LiSubject.jsx";

function LateralNav({ subjects, loading }) {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <DefaultLateralUl text={"Inicio"}>
          <Home />
        </DefaultLateralUl>
      </ul>
      <ul className={styles.list}>
        <DefaultLateralUl text={"Tareas pendientes"}>
          <Task />
        </DefaultLateralUl>
        {loading && "Loading..."}
        {subjects.length
          ? subjects.map((subject) => {
              return <LiSubject subject={subject?.subjectName} />;
            })
          : "No esta inscrito en ninguna materia.."}
      </ul>
    </nav>
  );
}

export default LateralNav;
