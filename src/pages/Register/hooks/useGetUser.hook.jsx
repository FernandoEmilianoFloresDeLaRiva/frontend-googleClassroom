import { useEffect, useState } from "react";
import { postUser } from "../../../services/services/Users/postUser";
import { registerActions } from "../context/actions/register.actions";

export const useGetUser = (password = "", dispatch, reqUser = {}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (password === "") return;
    const getCredentialsUser = async () => {
      dispatch({
        type: registerActions.setPassword,
        payload: password,
      });
      const newUser = {
        ...reqUser,
        password,
      };
      const response = await postUser(newUser);
      console.log(response);
      setUser(response);
    };
    getCredentialsUser();
  }, [password]);
  return { user };
};
