import React from "react";
import styles from "./CreateSubject.module.css";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { nameSchema } from "./validator/NameValidator.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { useSelector } from "react-redux";
import { postSubject } from "../../services/services/subjects/postSubject.js";

function CreateSubject({setOpen}) {
  const auth = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(nameSchema),
  });
  const handleOnSubmit = async (data) => {
    const {name} = data
    const res = postSubject(name, auth.idUser, auth.token)
    if(res !== null) setOpen()
  };
  return (
    <div className={styles.container} >
      <Input
        id="name"
        placeholder="Nombre de la clase (obligatorio)"
        config={register("name")}
        value={watch()}
      />
      <div className={styles.containerError}>
        {errors.name?.message && (
          <ErrorMessage message={errors.name?.message} />
        )}
      </div>
      <div className={styles.containerButtons}>
        <button onClick={setOpen}>cancelar</button>
        <button onClick={handleSubmit(handleOnSubmit)}>crear</button>
      </div>
    </div>
  );
}

export default CreateSubject;
