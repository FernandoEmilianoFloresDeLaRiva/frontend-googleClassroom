import React, { useContext } from "react";
import styles from "./LiSubject.module.css";
import { useLocation } from "wouter";
import { SubjectContext } from "../../pages/ParticularHome/context/subject.context";
function LiSubject({ subject }) {
  const [location, setLocation] = useLocation();
  const { setSubject } = useContext(SubjectContext);
  console.log(subject)
  const handleClick = (e) => {
    e.preventDefault();
    setSubject(subject);
    setLocation("/subject");
  };
  return (
    <li className={`${styles.options} ${styles.subject}`} onClick={handleClick}>
      <div className={styles.icon}>
        <span>{subject?.subjectName.charAt(0)}</span>
      </div>
      <span>{subject?.subjectName}</span>
    </li>
  );
}

export default LiSubject;
