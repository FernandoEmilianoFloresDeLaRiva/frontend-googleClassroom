import React from "react";
import Home from "../../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

function PrivateRouter({ isAuth }) {
  console.log(isAuth);
  return (
    <>
      <PrivateRoute pathName={"/home/:idMateria"} auth={isAuth}>
        <Home />
      </PrivateRoute>
    </>
  );
}

export default PrivateRouter;
