import React, { useContext, useState } from "react";
import styles from "./ParticularHome.module.css";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import { SubjectContext } from "./context/subject.context";
import ContainerNews from "../../components/ContainerNews/ContainerNews";
import ContainerPeople from "../../components/containerPeople/ContainerPeople";
import { useSelector } from "react-redux";
import ContainerCreateTask from "../../components/ContainerCreateTask/ContainerCreateTask";
import { useGetTasks } from "../../hooks/useGetTasks";
import ChatHome from "../../components/ChatHome/ChatHome";

function ParticularHome() {
  const auth = useSelector((state) => state.auth);
  const [indexComponent, setIndexComponent] = useState(0);
  const { subject } = useContext(SubjectContext);
  const { tasks, isLoading } = useGetTasks(subject?.idSubject);
  const navTexts =
    auth.idUser === subject.idTeacher
      ? [
          {
            text: "Tablón",
            component: <ContainerNews tasks={tasks} loading={isLoading} />,
          },
          {
            text: "Trabajo en clase",
            component: (
              <ContainerCreateTask tasks={tasks} loading={isLoading} />
            ),
          },
          { text: "Personas", component: <ContainerPeople /> },
          { text: "Chat grupal", component: <ChatHome subject={subject} token ={auth.token}/> },
        ]
      : [
          {
            text: "Tablón",
            component: <ContainerNews tasks={tasks} loading={isLoading} />,
          },
          { text: "Personas", component: <ContainerPeople /> },
          { text: "Chat grupal", component: <ChatHome subject={subject}/> },
        ];
  return (
    <LayoutHome subject={subject?.subjectName}>
      <nav className={styles.navContainer}>
        {navTexts.map(({ text }, index) => {
          return (
            <a key={text} onClick={() => setIndexComponent(index)}>
              {text}
            </a>
          );
        })}
      </nav>
      <div className={styles.dataContainer}>
        {navTexts[indexComponent]?.component
          ? navTexts[indexComponent].component
          : ""}
      </div>
    </LayoutHome>
  );
}

export default ParticularHome;
