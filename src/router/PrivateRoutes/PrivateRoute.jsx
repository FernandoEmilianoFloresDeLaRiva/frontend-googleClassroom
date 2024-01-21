import React from "react";
import { Redirect, Route } from "wouter";

function PrivateRoute({ pathName, children, auth }) {
  return <Route path={pathName}>{auth ? children : <Redirect to="/" />}</Route>;
}

export default PrivateRoute;
