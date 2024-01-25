import React, { useContext } from "react";
import styles from "./CreateTask.module.css";
import TaskIcon from "../../../../assets/imgs/TaskIcon";
import Input from "../../../../components/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { taskSchema } from "../../validators/taskValidator";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import { SubjectContext } from "../../context/subject.context";
import { postTask } from "../../../../services/services/tasks/postTask";

function CreateTask({ handleOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
  });
  const { subject } = useContext(SubjectContext);
  const handleOnSubmit = async (data) => {
    try {
      const reqTask = {
        ...data,
        idSubject: subject?.idSubject,
      };
      const res = await postTask(reqTask);
      handleOpen();
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <form className={styles.container}>
      <header className={styles.header}>
        <div className={styles.halfHeader}>
          <span onClick={handleOpen}>X</span>
          <div className={styles.icon}>
            <TaskIcon />
          </div>
          <span>Tarea</span>
        </div>
        <div
          className={styles.halfHeader}
          style={{ justifyContent: "flex-end" }}
        >
          <button
            className={styles.button}
            onClick={handleSubmit(handleOnSubmit)}
          >
            Asignar
          </button>
        </div>
      </header>
      <div className={styles.form}>
        <div className={styles.firstPart}>
          <Input
            id="workname"
            placeholder={errors.workName?.message || "Título"}
            config={register("workname")}
          />
          <Input
            id="description"
            placeholder={
              errors.description?.message || "Instrucciones (opcionales)"
            }
            config={register("description")}
          />
        </div>
      </div>
      <div className={styles.formRight}>
        <div className={styles.containerRight}>
          <label>Fecha límite</label>
          <Input
            id="date"
            placeholder="Fecha limite"
            config={register("date")}
            type="date"
          />
          {errors.date?.message && (
            <ErrorMessage message={errors.date?.message} />
          )}
        </div>
      </div>
    </form>
  );
}

export default CreateTask;
