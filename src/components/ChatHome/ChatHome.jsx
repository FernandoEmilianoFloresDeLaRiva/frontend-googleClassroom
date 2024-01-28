import React, { useState } from "react";
import styles from "./ChatHome.module.css";
import { useChat } from "./../../hooks/useChat";
import { useSelector } from "react-redux";

function ChatHome({ subject, token }) {
  const [messageInput, setMessageInput] = useState("");
  const auth = useSelector((state) => state.auth);
  const { messages, sendMessage } = useChat(
    subject?.code,
    messageInput,
    auth.name,
    token
  );
  return (
    <div className={styles.container}>
      <ul className={styles.listchat}>
        {messages.length &&
          messages.map(({ userId, message }) => (
            <li key={messages.length} className={styles.message}>
              <strong>{userId}:</strong> {message}
            </li>
          ))}
      </ul>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Escribe un mensaje..."
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}

export default ChatHome;
