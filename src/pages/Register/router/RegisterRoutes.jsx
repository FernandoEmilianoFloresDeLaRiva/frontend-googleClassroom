import React from "react";
import RegisterSignup from "../components/RegisterSignup/RegisterSignup";
import RegisterEmailSignup from "../components/RegisterEmailSignUp/RegisterEmailSignUp"
import { Route } from "wouter";
import { RegisterProvider } from "../context/register.context";
import RegisterPasswordSignup from "../components/RegisterPasswordSignUp/RegisterPasswordSignup";

function RegisterRoutes() {
  return (
    <RegisterProvider>
      {/* initial page from register */}
      <Route path="/register/signup/name">
        <RegisterSignup />
      </Route>
      <Route path="/register/signup/email">
        <RegisterEmailSignup/>
      </Route>
      <Route path="/register/signup/createpassword">
        <RegisterPasswordSignup />
      </Route>
    </RegisterProvider>
  );
}

export default RegisterRoutes;
