import { createContext, useReducer } from "react";
import { registerReducer } from "./reducer/register.reducer";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [userRegister, dispatch] = useReducer(registerReducer, {
    name: "",
    email: "",
    password: "",
  });

  return (
    <RegisterContext.Provider value={{ userRegister, dispatch }}>
      {children}
    </RegisterContext.Provider>
  );
};
