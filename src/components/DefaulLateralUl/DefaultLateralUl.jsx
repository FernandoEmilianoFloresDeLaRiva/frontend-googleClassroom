import React from "react";
import styles from "./DefaultLateralUl.module.css";

function DefaultLateralUl({ children, text, handleClick = () => {} }) {
  return (
    <li className={styles.options} onClick={handleClick}>
      <div>{children}</div>
      <span>{text}</span>
    </li>
  );
}

export default DefaultLateralUl;
