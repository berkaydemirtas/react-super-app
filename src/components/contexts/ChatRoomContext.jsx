import { createContext, useState, useEffect } from "react";
import { w3cwebsocket as WebSocket } from "websocket";

const chatRoomContext = createContext();

export const ChatRoomContextProvider = ({ children }) => {
  const [webSocket, setWebSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState(null);
  const [nickname, setNickname] = useState(null);

  const createWebSocketConnection = () => {
    const newWebSocket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);
    newWebSocket.onopen = () => {
      console.log("WebSocket Client Connected");
      setWebSocket(newWebSocket);
      setConnected(true);
    };

    newWebSocket.onmessage = (message) => {
      const parsedMessage = JSON.parse(message.data);

      if (parsedMessage.action === "connectToRoom") {
        setNickname(parsedMessage.nickname);
        let tempMessages = [];
        let newMessages = parsedMessage.messages;
        for (let i = newMessages.length; i >= 0; i--) {
          if (newMessages[i] !== undefined) {
            tempMessages.push({
              message: newMessages[i].message.S,
              nickname: newMessages[i].nickname.S,
              creationTime: newMessages[i].creationTime.S,
            });
          }
        }
        setMessages(tempMessages);
      }

      if (parsedMessage.action === "createRoom") {
        setNickname(parsedMessage.nickname);
        setRoom(parsedMessage.roomCode);
      }
      if (parsedMessage.action === "getMessage") {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            message: parsedMessage.message,
            nickname: parsedMessage.nickname,
            creationTime: parsedMessage.creationTime,
          },
        ]);
      }
      console.log("message received: ", parsedMessage);
    };

    newWebSocket.onclose = () => {
      console.log("WebSocket Client Disconnected");
      setConnected(false);
      setWebSocket(null);
    };

    return newWebSocket;
  };

  useEffect(() => {
    const newWebSocket = createWebSocketConnection();
    return () => {
      setConnected(false);
      newWebSocket.close();
      setWebSocket(null);
    };
  }, []);

  const refreshContext = () => {
    console.log("refreshing context");
    setConnected(false);
    setMessages([]);
    setRoom(null);
    setNickname(null);

    if (webSocket) {
      webSocket.close();
    }
    const newWebSocket = createWebSocketConnection();
  };

  return (
    <chatRoomContext.Provider
      value={{
        webSocket,
        connected,
        messages,
        nickname,
        room,
        setWebSocket,
        setConnected,
        setMessages,
        setNickname,
        setRoom,
        refreshContext,
      }}
    >
      {children}
    </chatRoomContext.Provider>
  );
};

export default chatRoomContext;
