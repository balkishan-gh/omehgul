"use client";

import { cn } from "@/libs/utils";
import clsx from "clsx";
import { SendHorizontal } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSocket } from "./SocketProvider";

function MessageBox({ isVideo }) {
  const { socket, remoteId } = useSocket();
  const [newMessage, setNewMessage] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive-message", ({ messageDetails }) => {
      console.log("Line no. 16");
      console.log(messageDetails);
      console.log("Line no. 17");
      console.log(messages);
      setMessages([...messages, messageDetails]);
    });
  }, [messages]);

  // The issue occurs because of how you're using the messages state in your useEffect hook. In React, when you use the state inside a useEffect without including it in the dependencies, it captures the initial state of messages at the time the useEffect is set up, which is an empty array [] in this case. Each time a new message arrives, the effect refers to the initial empty array and appends the new message to it, causing the previous messages to be lost.

  console.log("Line no. 22");
  console.log(messages);

  return (
    <div
      className={cn(
        isVideo === true ? "hidden" : "flex",
        "h-[92vh] overflow-y-scroll lg:flex"
      )}
    >
      {/* <div className="flex flex-col gap-y-4 mt-16 w-[755px] p-4 flex-shrink">
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start max-w-[300px]">
          Hi Yash
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end max-w-[300px]">
          Hello BK
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start max-w-[300px]">
          Kya kar rha hai??
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start max-w-[300px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          libero?
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start max-w-[300px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          libero?
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start max-w-[300px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          libero?
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
      </div> */}
      <div className="flex flex-col gap-y-4 mt-16 w-[755px] p-4 flex-shrink">
        {messages.map((message) => (
          <div
            className={cn(
              message.receiver === remoteId
                ? "bg-orange-300 self-end"
                : "bg-gray-300 self-start",
              "px-4 py-2 rounded-full max-w-[300px]"
            )}
          >
            {message.message}
          </div>
        ))}
      </div>
      <div className="p-4 fixed bottom-0 w-[100%] md:w-[73.5%] lg:w-[35%] xl:w-[50%]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Line no. 56");
            console.log(remoteId);
            console.log(newMessage);
            socket.emit("send-message", {
              message: newMessage,
              socketId: remoteId,
            });
            setMessages([
              ...messages,
              { message: newMessage, receiver: remoteId },
            ]);
            setNewMessage("");
          }}
        >
          <div className="flex items-center justify-between bg-white px-4 py-2 rounded-full">
            <textarea
              disabled={remoteId ? false : true}
              placeholder={
                remoteId
                  ? messages.length === 0
                    ? "Say hi..."
                    : "Send a message..."
                  : "Waiting for someone..."
              }
              className="resize-none focus:outline-none w-[90%] h-6"
              value={newMessage}
              onChange={(e) => {
                setNewMessage(e.target.value);
              }}
            ></textarea>
            <button 
            // disabled={newMessage.length === 0 ? true : false}
            >
              <SendHorizontal />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
