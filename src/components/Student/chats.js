// Chat.js
import React, { useState, useEffect } from "react";
import { database } from "./firebase";
import { auth } from "./firebase"; // Assuming authentication is done

const Chat = ({ chatID }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const userID = auth.currentUser.uid;

  // Fetch chat messages
  useEffect(() => {
    const messagesRef = database.ref(`chats/${chatID}/messages`);
    messagesRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const messageList = data ? Object.values(data) : [];
      setMessages(messageList);
    });
  }, [chatID]);

  // Send a new message
  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const messagesRef = database.ref(`chats/${chatID}/messages`);
      const newMessageObj = {
        sender: userID,
        text: newMessage,
        timestamp: Date.now(),
      };
      messagesRef.push(newMessageObj);
      setNewMessage(""); // Clear input after sending
    }
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === userID ? "sent" : "received"}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
