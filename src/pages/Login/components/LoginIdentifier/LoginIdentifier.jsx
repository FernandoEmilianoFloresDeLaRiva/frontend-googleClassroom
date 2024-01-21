import React, { useContext, useState } from "react";
import styles from "./LoginIdentifier.module.css";
import FormLoginLayout from "../../../../components/FormLoginLayout/FormLoginLayout";
import Input from "../../../../components/Input/Input";
import { LoginContext } from "../../context/login.context";
import { loginActions } from "../../context/actions/login.actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { emailSchema } from "../../validators/EmailValidator";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import { getUserByEmail } from "../../../../services/services/Users/getUserByEmail";

function LoginIdentifier() {
  const [_location, setLocation] = useLocation();
  const [invalidEmail, setInvalidEmail] = useState(false);
  const { dispatch } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
  });
  //posteriormente mover logica
  const handleOnSubmit = async (data) => {
    const response = await getUserByEmail(data);
    if (response) {
      const { name, email } = response;
      setInvalidEmail(false);
      dispatch({
        type: loginActions.setEmail,
        payload: email,
      });
      dispatch({
        type: loginActions.setName,
        payload: name,
      });
      setLocation("/pwd");
    } else {
      setInvalidEmail(true);
    }
  };
  return (
    <FormLoginLayout>
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
        <div className={styles.containerError}>
          {errors.email?.message ||
            (invalidEmail && (
              <ErrorMessage
                message={errors.email?.message || "Email invalido"}
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

export default LoginIdentifier;
