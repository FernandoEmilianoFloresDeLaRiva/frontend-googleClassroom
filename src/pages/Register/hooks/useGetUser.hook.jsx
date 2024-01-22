import { useEffect, useState } from "react";
import { postUser } from "../../../services/services/Users/postUser";
import { registerActions } from "../context/actions/register.actions";
import { createAdaptedAuth } from "../../../adapters/createAdaptedAuth";
import { useDispatch } from "react-redux";
import { postAuth } from "../../../Redux/Auth/auth.slice";
import { useLocation } from "wouter";

export const useGetUser = (password = "", dispatch, reqUser = {}) => {
  const dispatchRedux = useDispatch();
  const [location, setLocation] = useLocation();
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
      console.log(newUser);
      const response = await postUser(newUser);
      const formatedResponse = createAdaptedAuth(response);
      dispatchRedux(postAuth(formatedResponse));
      console.log(formatedResponse);
      setUser(formatedResponse);
      setLocation("/home/0");
    };
    getCredentialsUser();
  }, [password]);
  return { user };
};
