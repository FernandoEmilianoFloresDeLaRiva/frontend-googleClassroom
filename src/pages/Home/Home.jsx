import React from "react";
import styles from "./Home.module.css";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import CardClass from "../../components/CardClass/CardClass";
import { useSubjectsByIdUser } from "../../hooks/useSubjectsByIdUser";
import { useSelector } from "react-redux";

function Home() {
  const auth = useSelector((state) => state.auth);
  const { subjects, isLoading } = useSubjectsByIdUser(auth);
  return (
    <LayoutHome>
      <section className={styles.container}>
        {isLoading && "Loading..."}
        {subjects.length
          ? subjects.map((subject) => {
              return <CardClass subject={subject?.subjectName} />;
            })
          : "No esta inscrito en ninguna materia.."}
      </section>
      {/* implementar cards de clases y al dar click el id de clase se guarda en url, para posteriormente aparezca en la nav */}
    </LayoutHome>
  );
}

export default Home;
