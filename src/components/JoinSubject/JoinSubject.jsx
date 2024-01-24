import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./JoinSubject.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { codeSchema } from "./validators/codeValidator";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { enrolledSubject } from "../../services/services/subjects/enrolledSubject";

function JoinSubject({ setOpen }) {
  const auth = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(codeSchema),
  });
  const handleOnSubmit = async (data) => {
    const { code } = data;
    const res = enrolledSubject(code, auth.idUser, auth.token);
    if (res !== null) setOpen();
  };
  return (
    <div className={styles.container}>
      <Input
        id="code"
        placeholder="Código de clase"
        config={register("code")}
        value={watch()}
      />
      <div className={styles.containerError}>
        {errors.code?.message && (
          <ErrorMessage message={errors.code?.message} />
        )}
      </div>
      <div className={styles.containerButtons}>
        <button onClick={setOpen}>cancelar</button>
        <button onClick={handleSubmit(handleOnSubmit)}>unirme</button>
      </div>
    </div>
  );
}

export default JoinSubject;
