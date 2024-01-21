import React from "react";
import styles from "./Nav.module.css";
import classroomLogo from "../../assets/imgs/logo-classroom.svg";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((state) => state.auth);
  return (
    <nav className={styles.container}>
      <div className={styles.containerLogo}>
        <a>
          <img src={classroomLogo} />
          <span>Classroom</span>
        </a>
      </div>
      <div className={styles.profile}>
        <button className={styles.buttonPlus}>
          <span>+</span>
        </button>
        <div className={styles.placeholder} role="tooltip">
          Crear o unirse a una clase
        </div>
        <div className={styles.icon}>
          <span>F</span>
        </div>
        <div className={styles.placeholderProfile} role="tooltip">
          <span>Cuenta de Google</span>
          <span>{user?.name || ""}</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
