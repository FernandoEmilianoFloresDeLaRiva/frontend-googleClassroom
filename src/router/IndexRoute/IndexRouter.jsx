import React from "react";
import LoginRoutes from "../../pages/Login/router/LoginRoutes";
import RegisterRoutes from "../../pages/Register/router/RegisterRoutes";
import styles from "./LayoutIndex.module.css";

function IndexRouter() {
  return (
    <div className={styles.body}>
      <LoginRoutes />
      <RegisterRoutes />
    </div>
  );
}

export default IndexRouter;
