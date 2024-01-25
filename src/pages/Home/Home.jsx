import React, { useState } from "react";
import styles from "./Home.module.css";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import CardClass from "../../components/CardClass/CardClass";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import { useSubjectsByIdUser } from "../../hooks/useSubjectsByIdUser";
import { useSelector } from "react-redux";
import CreateSubject from "../../components/CreateSubject/CreateSubject";
import JoinSubject from "../../components/JoinSubject/JoinSubject";

function Home() {
  const auth = useSelector((state) => state.auth);
  const { subjects, isLoading, subjectsCreated } = useSubjectsByIdUser(auth);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenJoin, setIsOpenJoin] = useState(false);
  const setOpenCreate = () => {
    setIsOpenCreate((prev) => !prev);
  };
  const setOpenJoin = () => {
    setIsOpenJoin((prev) => !prev);
  };
  return (
    <LayoutHome setOpenCreate={setOpenCreate} setOpenJoin={setOpenJoin}>
      {isOpenCreate && (
        <ModalContainer>
          <CreateSubject setOpen={setOpenCreate} />
        </ModalContainer>
      )}
      {isOpenJoin && (
        <ModalContainer>
          <JoinSubject setOpen={setOpenJoin} />
        </ModalContainer>
      )}
      <section className={styles.container}>
        {isLoading && "Loading..."}
        {subjects.length
          ? subjects.map((subject) => {
              return (
                <CardClass
                  subject={subject}
                  key={subject?.idSubject}
                  path={"/subject"}
                />
              );
            })
          : "No esta inscrito en ninguna materia.."}
      </section>
      <div className={styles.created}>
        <p>Clases creadas:</p>
      </div>
      <section className={`${styles.container} ${styles.createdContainer}`}>
        {isLoading && "Loading..."}
        {subjectsCreated.length
          ? subjectsCreated.map((subject) => {
              return (
                <CardClass
                  subject={subject}
                  key={subject?.idSubject}
                  path={"/subject"}
                />
              );
            })
          : "No haz creado ninguna materia.."}
      </section>
    </LayoutHome>
  );
}

export default Home;
