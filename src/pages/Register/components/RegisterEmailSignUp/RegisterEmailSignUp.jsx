import React, { useContext } from "react";
import styles from "./RegisterEmailSignUp.module.css";
import FormLoginLayout from "../../../../components/FormLoginLayout/FormLoginLayout";
import Input from "../../../../components/Input/Input";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import { useLocation } from "wouter";
import { RegisterContext } from "../../context/register.context";
import { emailSchema } from "../../../Login/validators/EmailValidator";
import { registerActions } from "../../context/actions/register.actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function RegisterEmailSignUp() {
  const [location, setLocation] = useLocation();
  const { dispatch } = useContext(RegisterContext);
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
      type: registerActions.setEmail,
      payload: email,
    });
    setLocation("/register/signup/createpassword");
  };
  return (
    <FormLoginLayout>
      <span className={styles.span}>Usar tu correo electrónico</span>
      <p className={styles.emailStep}>
        Introduce la dirección de correo que quieres usar en tu cuenta de Google
      </p>
      <div className={styles.containerInputButtons}>
        <Input
          placeholder="Dirección de correo electrónico"
          id="email"
          config={register("email")}
          type="email"
          value={watch()}
        />
        <div className={styles.containerError}>
          {errors.email?.message && (
            <ErrorMessage message={errors.email?.message} />
          )}
        </div>
        <div className={styles.containerButtons}>
          <button onClick={handleSubmit(handleOnSubmit)}>Siguiente</button>
        </div>
      </div>
    </FormLoginLayout>
  );
}

export default RegisterEmailSignUp;
