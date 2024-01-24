import React from "react";
import styles from "./ModalContainer.module.css";

function ModalContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default ModalContainer;
