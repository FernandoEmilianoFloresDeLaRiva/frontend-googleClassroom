import React, { useState } from "react";
import styles from "./Nav.module.css";
import classroomLogo from "../../assets/imgs/logo-classroom.svg";
import { useSelector } from "react-redux";
import { useParams } from "wouter";

function Nav() {
  const [activeGroupButtons, setActiveGroupButtons] = useState(false);
  //realizar fetch de clase con id que viene en el parametro de url
  const params = useParams();
  const materia = parseInt(params.idMateria) !== 0 ? params.idMateria : 0;
  const user = useSelector((state) => state.auth);
  return (
    <nav className={styles.container}>
      <div className={styles.containerLogo}>
        <a>
          <img src={classroomLogo} />
          <span>Classroom {materia !== 0 ? ` > ${materia} ` : ""}</span>
        </a>
      </div>
      <div className={styles.profile}>
        <button
          className={styles.buttonPlus}
          onClick={() => setActiveGroupButtons((prev) => !prev)}
        >
          <span>+</span>
        </button>
        {activeGroupButtons && (
          <div className={styles.groupButtons}>
            <button>unirme a clase</button>
            <button>crear clase</button>
          </div>
        )}
        <div className={styles.placeholder} role="tooltip">
          Crear o unirse a una clase
        </div>
        <div className={styles.icon}>
          <span>{user?.name.charAt(0)}</span>
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
