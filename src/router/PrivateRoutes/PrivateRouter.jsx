import React from "react";
import Home from "../../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import { SubjectProvider } from "../../pages/ParticularHome/context/subject.context";
import ParticularHome from "../../pages/ParticularHome/ParticularHome";
import PendingsHome from "../../pages/PendingsHome/PendingsHome";
import ParticularTask from "../../pages/ParticularTask/ParticularTask";
import { TaskProvider } from "../../pages/ParticularTask/context/task.context";

function PrivateRouter({ isAuth }) {
  return (
    <SubjectProvider>
      <TaskProvider>
        <PrivateRoute pathName={"/home"} auth={isAuth}>
          <Home />
        </PrivateRoute>
        <PrivateRoute pathName={"/subject"} auth={isAuth}>
          <ParticularHome />
        </PrivateRoute>
        <PrivateRoute pathName={"/pendings"} auth={isAuth}>
          <PendingsHome />
        </PrivateRoute>
        <PrivateRoute pathName={"/task"} auth={isAuth}>
          <ParticularTask />
        </PrivateRoute>
      </TaskProvider>
    </SubjectProvider>
  );
}

export default PrivateRouter;
