import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import VideoBox from "./VideoBox";
import MessageBox from "./MessageBox";

function Chatroom({ isVideo }: any) {
  return (
    <>
      {/* <NavBar /> */}
      <div className="flex">
        <SideBar />
        <VideoBox isVideo={isVideo} />
        <MessageBox isVideo={isVideo} />
      </div>
    </>
  );
}

export default Chatroom;
