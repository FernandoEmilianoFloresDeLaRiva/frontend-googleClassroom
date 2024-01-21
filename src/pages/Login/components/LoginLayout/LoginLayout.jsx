import React from "react";
import styles from "./LoginLayout.module.css";
import googleLogo from "../../../../assets/imgs/google-logo.svg";

function LoginLayout({ children }) {
  return (
    <form className={styles.form}>
      <div className={styles.formInfo}>
        <img src={googleLogo} />
        {children}
      </div>
    </form>
  );
}

export default LoginLayout;
