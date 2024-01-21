import { useEffect, useState } from "react";
import { postUser } from "../../../services/services/Users/postUser";
import { registerActions } from "../context/actions/register.actions";
import { createAdaptedAuth } from "../../../adapters/createAdaptedAuth";
import { useDispatch } from "react-redux";
import { postAuth } from "../../../Redux/Auth/auth.slice";

export const useGetUser = (password = "", dispatch, reqUser = {}) => {
  const dispatchRedux = useDispatch();
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
      const formatedResponse = createAdaptedAuth(response);
      dispatchRedux(postAuth(formatedResponse));
      console.log(formatedResponse);
      setUser(formatedResponse);
    };
    getCredentialsUser();
  }, [password]);
  return { user };
};
