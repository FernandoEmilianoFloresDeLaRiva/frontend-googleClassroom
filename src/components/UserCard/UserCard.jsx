import React from "react";
import styles from "./UserCard.module.css";
import MessageIcon from "../../assets/imgs/MessageIcon";

function UserCard({user}) {
  return (
    <article className={styles.container}>
      <div className={styles.username}>
        <div>
          <span>{user?.name.charAt(0)}</span>
        </div>
        <span>{user?.name}</span>
      </div>
      <div className={styles.messageIcon}>
        <MessageIcon />
      </div>
    </article>
  );
}

export default UserCard;
