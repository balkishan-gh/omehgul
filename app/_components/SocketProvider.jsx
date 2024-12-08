"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
// import { toast } from "sonner";

// Create the SocketContext
const SocketContext = createContext(null);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  // const [realTimemessages, setRealTimemessages] = useState(null);
  const [remoteId, setRemoteId] = useState(null);

  // const socket = useRef(io(process.env.BACKEND_URL));
  // You can also store connection instance in a ref instead of managing state
  console.log("Line no. 19");
  console.log(remoteId);

  useEffect(() => {
    const socketInstance = io();
    process.env.BACKEND_URL;
    // "http://localhost:8080"

    socketInstance.on("connect", () => {
      console.log("Connected to the server with ID:", socketInstance.id);
    });
    socketInstance.on("send-remote", ({ id }) => {
      setRemoteId(id);
    });

    setSocket(socketInstance);

    // Clean up on unmount
    return () => {
      socketInstance.disconnect();
      console.log("Socket disconnected");
    };
  }, []);

  useEffect(() => {}, []);

  // Only render children once socket is initialized
  if (!socket) {
    return <div>Loading socket...</div>; // Optional: Display a loading state while socket initializes
  }

  return (
    // <SocketContext.Provider value={{ socket, realTimemessages, remoteId }}>
    <SocketContext.Provider value={{ socket, remoteId }}>
      {children}
    </SocketContext.Provider>
  );
};
