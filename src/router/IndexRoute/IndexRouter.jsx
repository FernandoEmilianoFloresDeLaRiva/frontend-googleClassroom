import React from "react";
import LoginRoutes from "../../pages/Login/router/LoginRoutes";
import RegisterRoutes from "../../pages/Register/router/RegisterRoutes";
import styles from "./LayoutIndex.module.css";
import PrivateRouter from "../PrivateRoutes/PrivateRouter";
import { useSelector } from "react-redux";

function IndexRouter() {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <div className={styles.body}>
      <LoginRoutes />
      <RegisterRoutes />
      {isAuth && <PrivateRouter isAuth={isAuth} />}
    </div>
  );
}

export default IndexRouter;
