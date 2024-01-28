import React from "react";
import styles from "./LateralNav.module.css";
import Home from "../../assets/imgs/home.jsx";
import Task from "../../assets/imgs/Task.jsx";
import DefaultLateralUl from "../DefaulLateralUl/DefaultLateralUl.jsx";
import LiSubject from "../LiSubject/LiSubject.jsx";
import { useLocation } from "wouter";

function LateralNav({ subjects, loading, subjectsCreated }) {
  const [_location, setLocation] = useLocation();
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <DefaultLateralUl
          text={"Inicio"}
          handleClick={() => setLocation("/home")}
        >
          <Home />
        </DefaultLateralUl>
      </ul>
      <ul className={styles.list}>
        <DefaultLateralUl
          text={"Tareas pendientes"}
          handleClick={() => setLocation("/pendings")}
        >
          <Task />
        </DefaultLateralUl>
        {!loading &&
          subjects.length &&
          subjects.map((subject) => {
            return <LiSubject subject={subject} key={subject?.idSubject} />;
          })}
        {!loading &&
          subjectsCreated.length &&
          subjectsCreated.map((subject) => {
            return <LiSubject subject={subject} key={subject?.idSubject} />;
          })}
      </ul>
    </nav>
  );
}

export default LateralNav;
