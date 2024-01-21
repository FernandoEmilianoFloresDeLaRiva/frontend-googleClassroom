import React from "react";
import styles from "./ErrorMessage.module.css";
import Warning from "../../assets/imgs/warning.svg";

function ErrorMessage({ message = "" }) {
  return (
    <div className={styles.container}>
      <img src={Warning} />
      {message}
    </div>
  );
}

export default ErrorMessage;
