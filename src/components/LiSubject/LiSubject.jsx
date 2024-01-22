import React from "react";
import styles from "./LiSubject.module.css";
function LiSubject({subject = 0}) {
  return (
    <li className={`${styles.options} ${styles.subject}`}>
      <div className={styles.icon}>
        <span>{subject.charAt(0)}</span>
      </div>
      <span>{subject}</span>
    </li>
  );
}

export default LiSubject;
