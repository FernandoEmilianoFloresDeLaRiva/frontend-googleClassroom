import React from "react";
import styles from "./RegisterSignup.module.css";
import FormLoginLayout from "../../../../components/FormLoginLayout/FormLoginLayout";
import Input from "../../../../components/Input/Input";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {nameSchema} from "../../validators/NameValidator"

function RegisterSignup() {
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
    const { email } = data;
    dispatch({
      type: loginActions.setEmail,
      payload: email,
    });
    setLocation("/pwd");
  };
  return (
    <FormLoginLayout>
      <span>Crea una cuenta de Google</span>
      <p>Introduce tu nombre</p>
      <div className={styles.containerInputButtons}>
        <Input />
        <Input />
      </div>
      {errors.name?.message && <ErrorMessage message={errors.name?.message} />}
      <div className={styles.containerButtons}>
        <button onClick={handleSubmit(handleOnSubmit)}>Siguiente</button>
      </div>
    </FormLoginLayout>
  );
}

export default RegisterSignup;
