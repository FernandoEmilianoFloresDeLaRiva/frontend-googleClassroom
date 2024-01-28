import { useEffect, useState } from "react";
import io from "socket.io-client";

export function useChat(code, messageInput, name) {
  const [messages, setMessages] = useState([]);
  const socket = io("http://localhost:5000");
  const [active, setActive] = useState(false);
  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      const data = {
        userId: name,
        message: messageInput,
      };
      socket.emit("chatMessage", code, data);
      setActive((prev) => !prev);
    }
  };

  useEffect(() => {
    socket.emit("joinRoom", code);

    // Manejar mensajes recibidos de otros usuarios
    socket.on("messageReceived", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

  return { messages, sendMessage };
}
