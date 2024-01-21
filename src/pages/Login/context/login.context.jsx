import { createContext, useReducer } from "react";
import { loginReducer } from "./reducer/login.reducer";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userLogin, dispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
  });
  return (
    <LoginContext.Provider value={{ userLogin, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
