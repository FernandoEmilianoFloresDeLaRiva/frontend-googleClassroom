import React from "react";
import styles from "./DefaultLateralUl.module.css";

function DefaultLateralUl({ children, text }) {
  return (
    <li className={styles.options}>
      <div>{children}</div>
      <span>{text}</span>
    </li>
  );
}

export default DefaultLateralUl;
