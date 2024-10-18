"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
// import { toast } from "sonner";

// Create the SocketContext
const SocketContext = createContext(null);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [realTimemessages, setRealTimemessages] = useState(null);

  // const socket = useRef(io("http://localhost:3000"));
  // You can also store connection instance in a ref instead of managing state

  useEffect(() => {
    const socketInstance = io("http://localhost:5000");

    socketInstance.on("connect", () => {
      console.log("Connected to the server with ID:", socketInstance.id);
    });

    setSocket(socketInstance);

    // Clean up on unmount
    return () => {
      socketInstance.disconnect();
      console.log("Socket disconnected");
    };
  }, []);

  // Only render children once socket is initialized
  if (!socket) {
    return <div>Loading socket...</div>; // Optional: Display a loading state while socket initializes
  }

  return (
    <SocketContext.Provider value={{ socket, realTimemessages }}>
      {children}
    </SocketContext.Provider>
  );
};
