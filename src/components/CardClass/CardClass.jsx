import React, { useContext } from "react";
import styles from "./Card.module.css";
import { useLocation } from "wouter";
import { SubjectContext } from "../../pages/ParticularHome/context/subject.context";

function CardClass({ subject, path }) {
  const [location, setLocation] = useLocation();
  const { setSubject } = useContext(SubjectContext);
  const handleClick = (e) => {
    e.preventDefault();
    setSubject(subject);
    setLocation(path);
  };
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titles}>
          <h3 onClick={handleClick}>{subject?.subjectName}</h3>
          <p>{subject?.teacherName}</p>
        </div>
        <div className={styles.profile}>
          <span>{subject?.teacherName.charAt(0)}</span>
        </div>
      </div>
      <div className={styles.footer}></div>
    </article>
  );
}

export default CardClass;
