import React from "react";
import styles from "./Card.module.css";

function CardClass({ subject }) {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titles}>
          <h3>{subject?.subjectName}</h3>
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
