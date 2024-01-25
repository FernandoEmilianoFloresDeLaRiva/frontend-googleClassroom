import React, { useContext } from "react";
import styles from "./ContainerPeople.module.css";
import UserCard from "../UserCard/UserCard";
import { useUsersByIdSubject } from "../../hooks/useUsersByIdSubject";
import { SubjectContext } from "../../pages/ParticularHome/context/subject.context";

function ContainerPeople() {
  const { subject } = useContext(SubjectContext);
  const { users, isLoading } = useUsersByIdSubject(subject?.idSubject);
  return (
    <div className={styles.container}>
      {isLoading ? (
        "Cargando..."
      ) : (
        <>
          <div className={styles.containerTeacher}>
            <h2>Profesores</h2>
            {users.map((user) => {
              if (user.isTeacher) {
                return <UserCard user={user} />;
              }
            })}
          </div>
          <div className={styles.containerStudents}>
            <div className={styles.studentHeader}>
              <h2>Compañeros de clase</h2>
            </div>
            {users.map((user) => {
              if (!user.isTeacher) {
                return <UserCard user={user} />;
              }
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default ContainerPeople;
