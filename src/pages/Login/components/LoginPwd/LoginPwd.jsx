import React, { useContext, useState } from "react";
import styles from "./LoginPwd.module.css";
import FormLoginLayout from "../../../../components/FormLoginLayout/FormLoginLayout";
import Input from ".././../../../components/Input/Input";
import { LoginContext } from "../../context/login.context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordSchema } from "../../validators/PasswordValidator";
import { loginActions } from "../../context/actions/login.actions";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import { useLocation } from "wouter";
import { useGetUser } from "../../hooks/useGetUser.hook";

function LoginPwd() {
  const [location, setLocation] = useLocation();
  const { userLogin, dispatch } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });
  const { user } = useGetUser(password, dispatch, userLogin);
  const handleOnSubmit = (data) => {
    setPassword(data.password);
    if (user) {
      setInvalidPassword(false);
      dispatch({
        type: loginActions.setPassword,
        payload: password,
      });
    } else {
      setInvalidPassword(true);
    }
  };
  return (
    <FormLoginLayout>
      <p className={styles.p}>{userLogin.name}</p>
      <div className={styles.containerInputButtons}>
        <div className={styles.containerEmail}>
          <span className={styles.accountLetter}>
            {userLogin.name.charAt(0)}
          </span>
          <span>{userLogin.email}</span>
        </div>
        <span className={styles.warning}>
          Debes verificar que eres tú para poder continuar
        </span>
        <Input
          placeholder="Introduce tu contraseña"
          id="password"
          config={register("password")}
          type="password"
          value={watch()}
        />
        <div className={styles.containerError}>
          {errors.password?.message ||
            (invalidPassword && (
              <ErrorMessage
                message={
                  errors.password?.message ||
                  "Contraseña incorrecta. Vuelve a intentarlo."
                }
              />
            ))}
        </div>
        <div className={styles.containerButtons}>
          <button onClick={handleSubmit(handleOnSubmit)}>Siguiente</button>
          <button onClick={() => setLocation("/register/signup/name")}>
            Crear cuenta
          </button>
        </div>
      </div>
    </FormLoginLayout>
  );
}

export default LoginPwd;
