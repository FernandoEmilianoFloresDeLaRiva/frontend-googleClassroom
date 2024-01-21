import React from "react";
import { Route } from "wouter";
import LoginIdentifer from "../components/LoginIdentifier/LoginIdentifier";
import LoginPwd from "../components/LoginPwd/LoginPwd";
import { LoginProvider } from "../context/login.context";

function LoginRoutes() {
  return (
    <LoginProvider>
      <Route path="/">
        <LoginIdentifer />
      </Route>
      <Route path="/pwd">
        <LoginPwd />
      </Route>
    </LoginProvider>
  );
}

export default LoginRoutes;
