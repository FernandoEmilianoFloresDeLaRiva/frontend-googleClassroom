import React from "react";
import styles from "./LayoutHome.module.css";
import Nav from "../Nav/Nav";
import LateralNav from "../LateralNav/LateralNav";
import { useSubjectsByIdUser } from "../../hooks/useSubjectsByIdUser";
import { useSelector } from "react-redux";

function LayoutHome({ children, setOpenCreate, setOpenJoin }) {
  const auth = useSelector((state) => state.auth);
  const { subjects, isLoading } = useSubjectsByIdUser(auth);
  return (
    <div className={styles.container}>
      <Nav setOpenCreate={setOpenCreate} setOpenJoin={setOpenJoin} />
      <LateralNav subjects={subjects} loading={isLoading} />
      {children}
    </div>
  );
}

export default LayoutHome;
