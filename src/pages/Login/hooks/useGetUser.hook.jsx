import { useEffect, useState } from "react";
import { loginUser } from "../../../services/services/Users/loginUser";
import { loginActions } from "../context/actions/login.actions";

export const useGetUser = (password = "", dispatch, reqUser = {}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (password === "") return;
    const getCredentialsUser = async () => {
      dispatch({
        type: loginActions.setPassword,
        payload: password,
      });
      const newUser = {
        ...reqUser,
        password,
      };
      const response = await loginUser(newUser);
      console.log(response);
      setUser(response);
    };
    getCredentialsUser();
  }, [password]);
  return { user };
};
