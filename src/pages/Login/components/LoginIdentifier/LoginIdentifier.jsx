import React, { useContext } from "react";
import styles from "./LoginIdentifier.module.css";
import LoginLayout from "../LoginLayout/LoginLayout";
import Input from "../../../../components/Input/Input";
import { LoginContext } from "../../context/login.context";
import { loginActions } from "../../context/actions/login.actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { emailSchema } from "../../validators/EmailValidator";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";

function LoginIdentifier() {
  const [location, setLocation] = useLocation();
  const { dispatch } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
  });
  const handleOnSubmit = (data) => {
    const { email } = data;
    dispatch({
      type: loginActions.setEmail,
      payload: email,
    });
    setLocation("/pwd");
  };
  return (
    <LoginLayout>
      <span>Inicia Sesión</span>
      <p>utiliza tu cuenta de google</p>
      <div className={styles.containerInputButtons}>
        <Input
          placeholder="Correo electrónico"
          id="email"
          config={register("email")}
          type="email"
          value={watch()}
        />
        <div className={styles.containerButtons}>
          <button>Crear cuenta</button>
          <button onClick={handleSubmit(handleOnSubmit)}>Siguiente</button>
        </div>
      </div>
    </LoginLayout>
  );
}

export default LoginIdentifier;
