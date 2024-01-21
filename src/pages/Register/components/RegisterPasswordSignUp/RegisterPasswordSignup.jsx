import React, { useContext } from "react";
import styles from "./RegisterPasswordSignup.module.css";
import FormLoginLayout from "../../../../components/FormLoginLayout/FormLoginLayout";
import Input from "../../../../components/Input/Input";
import { useLocation } from "wouter";
import { RegisterContext } from "../../context/register.context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordSchema } from "../../validators/PasswordValidator";
import { registerActions } from "../../context/actions/register.actions";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";

function RegisterPasswordSignup() {
  const [location, setLocation] = useLocation();
  const { dispatch } = useContext(RegisterContext);
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
      type: registerActions.setPassword,
      payload: password,
    });
    // setLocation("/register/signup/createpassword");
  };
  return (
    <FormLoginLayout>
      <div className={styles.info}>
        <span className={styles.span}>Usar tu correo electrónico</span>
        <p className={styles.emailStep}>
          Crea una contraseña segura con una combinación de letras, números y
          símbolos
        </p>
      </div>
      <div className={styles.containerInputButtons}>
        <Input
          placeholder="Contraseña"
          id="password"
          config={register("password")}
          type="password"
          value={watch()}
        />
        <div className={styles.containerError}>
          {errors.password?.message && (
            <ErrorMessage message={errors.password?.message} />
          )}
        </div>
        <Input
          placeholder="Confirmación"
          id="confirmPassword"
          config={register("confirmPassword")}
          type="password"
          value={watch()}
        />
        <div className={styles.containerError}>
          {errors.confirmPassword?.message && (
            <ErrorMessage message={errors.confirmPassword?.message} />
          )}
        </div>
        <div className={styles.containerButtons}>
          <button onClick={handleSubmit(handleOnSubmit)}>Siguiente</button>
        </div>
      </div>
    </FormLoginLayout>
  );
}

export default RegisterPasswordSignup;
