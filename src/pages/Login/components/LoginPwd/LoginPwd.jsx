import React, { useContext } from "react";
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

function LoginPwd() {
  const [location, setLocation] = useLocation();
  const { dispatch } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });
  const handleOnSubmit = (data) => {
    const { password } = data;
    dispatch({
      type: loginActions.setPassword,
      payload: password,
    });
    alert("entrada exitosa");
  };
  const name = "Fernando Emiliano Flores De La Riva";
  return (
    <FormLoginLayout>
      <p className={styles.p}>{name}</p>
      <div className={styles.containerInputButtons}>
        <div className={styles.containerEmail}>
          <span className={styles.accountLetter}>F</span>
          <span>emilianoflores07081@gmail.com</span>
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
        <div className={styles.containerButtons}>
          <button onClick={() => setLocation("/register/signup")}>
            Crear cuenta
          </button>
          <button onClick={handleSubmit(handleOnSubmit)}>Siguiente</button>
        </div>
        {errors.password?.message && (
          <ErrorMessage message={errors.password?.message} />
        )}
      </div>
    </FormLoginLayout>
  );
}

export default LoginPwd;
