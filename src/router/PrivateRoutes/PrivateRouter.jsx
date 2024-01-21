import React from "react";
import Home from "../../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";

function PrivateRouter() {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <PrivateRoute pathName={"/home/:idMateria"} auth={auth.isAuth}>
        <Home />
      </PrivateRoute>
    </>
  );
}

export default PrivateRouter;
