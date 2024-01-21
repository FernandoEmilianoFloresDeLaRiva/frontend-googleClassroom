import React from "react";
import RegisterSignup from "../components/RegisterSignup/RegisterSignup";
import { Route } from "wouter";

function RegisterRoutes() {
  return (
    <>
      {/* initial page from register */}
      <Route path="/register/signup">
        <RegisterSignup />
      </Route>
    </>
  );
}

export default RegisterRoutes;
