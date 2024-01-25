import React from "react";
import styles from "./Input.module.css";

function Input({
  id = "",
  placeholder = "",
  config = {},
  type = "text",
  value = null,
}) {
  const isInputFilled = value !== null ? Object.keys(value).length !== 0 : false;
  return (
    <div className={styles.container}>
      <label
        className={`${styles.label} ${isInputFilled ? styles.visible : ""}`}
        htmlFor={placeholder}
      >
        {placeholder}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        placeholder={placeholder}
        {...config}
      />
    </div>
  );
}

export default Input;
