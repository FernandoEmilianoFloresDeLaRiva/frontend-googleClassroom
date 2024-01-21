import React from "react";
import styles from "./LayoutLogin.module.css";
import { Route } from "wouter";
import LoginIdentifer from "../components/LoginIdentifier/LoginIdentifier";
import LoginPwd from "../components/LoginPwd/LoginPwd";
import { LoginProvider } from "../context/login.context";

function LoginRoutes() {
  return (
    <div className={styles.body}>
      <LoginProvider>
        <Route path="/">
          <LoginIdentifer />
        </Route>
        <Route path="/pwd">
          <LoginPwd />
        </Route>
      </LoginProvider>
    </div>
  );
}

export default LoginRoutes;
