import React, { useState } from "react";
import styles from "./Nav.module.css";
import classroomLogo from "../../assets/imgs/logo-classroom.svg";
import { useSelector } from "react-redux";
import { useLocation } from "wouter";

function Nav({ setOpenCreate, setOpenJoin, subject = "" }) {
  const [activeGroupButtons, setActiveGroupButtons] = useState(false);
  const user = useSelector((state) => state.auth);
  const [location, setLocation] = useLocation();
  return (
    <nav className={styles.container}>
      <div className={styles.containerLogo}>
        <a onClick={() => setLocation("/home")}>
          <img src={classroomLogo} />
          <span>Classroom {subject !== "" ? ` > ${subject} ` : ""}</span>
        </a>
      </div>
      <div className={styles.profile}>
        {setOpenCreate !== null && setOpenJoin !== null && (
          <button
            className={styles.buttonPlus}
            onClick={() => setActiveGroupButtons((prev) => !prev)}
          >
            <span>+</span>
          </button>
        )}

        {setOpenCreate !== null &&
          setOpenJoin !== null &&
          activeGroupButtons && (
            <div className={styles.groupButtons}>
              <button onClick={setOpenJoin}>unirme a clase</button>
              <button onClick={setOpenCreate}>crear clase</button>
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
