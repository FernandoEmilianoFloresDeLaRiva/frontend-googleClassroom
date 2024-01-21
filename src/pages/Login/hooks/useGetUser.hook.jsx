import { useEffect, useState } from "react";
import { loginUser } from "../../../services/services/Users/loginUser";
import { loginActions } from "../context/actions/login.actions";
import { createAdaptedAuth } from "../../../adapters/createAdaptedAuth";
import { useDispatch } from "react-redux";
import { postAuth } from "../../../Redux/Auth/auth.slice";
export const useGetUser = (password = "", dispatch, reqUser = {}) => {
  const [user, setUser] = useState(null);
  const dispatchRedux = useDispatch();
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
      const formatedResponse = createAdaptedAuth(response);
      dispatchRedux(postAuth(formatedResponse));
      setUser(formatedResponse);
    };
    getCredentialsUser();
  }, [password]);
  return { user };
};
