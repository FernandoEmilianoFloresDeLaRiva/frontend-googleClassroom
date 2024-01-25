import React from "react";
import Home from "../../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import { SubjectProvider } from "../../pages/ParticularHome/context/subject.context";
import ParticularHome from "../../pages/ParticularHome/ParticularHome";
import PendingsHome from "../../pages/PendingsHome/PendingsHome";

function PrivateRouter({ isAuth }) {
  return (
    <SubjectProvider>
      <PrivateRoute pathName={"/home"} auth={isAuth}>
        <Home />
      </PrivateRoute>
      <PrivateRoute pathName={"/subject"} auth={isAuth}>
        <ParticularHome />
      </PrivateRoute>
      <PrivateRoute pathName={"/pendings"} auth={isAuth}>
        <PendingsHome />
      </PrivateRoute>
    </SubjectProvider>
  );
}

export default PrivateRouter;
