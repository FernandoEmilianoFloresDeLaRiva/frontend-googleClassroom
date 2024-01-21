import React from "react";
import LoginRoutes from "../../pages/Login/router/LoginRoutes";
import RegisterRoutes from "../../pages/Register/router/RegisterRoutes";
import styles from "./LayoutIndex.module.css";
import { Provider } from "react-redux";
import { store } from "../../Redux/indexStore";
import PrivateRouter from "../PrivateRoutes/PrivateRouter";

function IndexRouter() {
  return (
    <Provider store={store}>
      <div className={styles.body}>
        <LoginRoutes />
        <RegisterRoutes />
        <PrivateRouter />
      </div>
    </Provider>
  );
}

export default IndexRouter;
