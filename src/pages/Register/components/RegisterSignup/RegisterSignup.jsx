import React, { useContext } from "react";
import styles from "./RegisterSignup.module.css";
import FormLoginLayout from "../../../../components/FormLoginLayout/FormLoginLayout";
import Input from "../../../../components/Input/Input";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { nameSchema } from "../../validators/NameValidator";
import { registerActions } from "../../context/actions/register.actions";
import { RegisterContext } from "../../context/register.context";

function RegisterSignup() {
  const { dispatch } = useContext(RegisterContext);
  const [location, setLocation] = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(nameSchema),
  });
  const handleOnSubmit = (data) => {
    const { name } = data;
    dispatch({
      type: registerActions.setName,
      payload: name,
    });
    setLocation("/register/signup/email");
  };
  return (
    <FormLoginLayout>
      <span>Crea una cuenta de Google</span>
      <p>Introduce tu nombre</p>
      <div className={styles.containerInputButtons}>
        <Input
          id="name"
          placeholder="Nombre"
          config={register("name")}
          type="text"
          value={watch()}
        />
        <div className={styles.containerError}>
          {errors.name?.message && (
            <ErrorMessage message={errors.name?.message} />
          )}
        </div>
      </div>

      <div className={styles.containerButtons}>
        <button onClick={handleSubmit(handleOnSubmit)}>Siguiente</button>
      </div>
    </FormLoginLayout>
  );
}

export default RegisterSignup;
