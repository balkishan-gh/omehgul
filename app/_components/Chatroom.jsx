import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import VideoBox from "./VideoBox";
import MessageBox from "./MessageBox";

function Chatroom({ isVideo, audioTrack, videoTrack }) {
  console.log("Line no. 9");
  console.log(videoTrack);
  return (
    <>
      {/* <NavBar /> */}
      <div className="flex">
        <SideBar />
        <VideoBox
          isVideo={isVideo}
          audioTrack={audioTrack}
          videoTrack={videoTrack}
        />
        <MessageBox isVideo={isVideo} />
      </div>
    </>
  );
}

export default Chatroom;
