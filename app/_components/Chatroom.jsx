import React from "react";
import SideBar from "./SideBar";
import VideoBox from "./VideoBox";
import MessageBox from "./MessageBox";
import { useSocket } from "./SocketProvider";
import { useRouter } from "next/navigation";

function Chatroom({ isVideo, audioTrack, videoTrack }) {
  console.log("Line no. 9");
  console.log(videoTrack);
  const router = useRouter();
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
        <form
          onSubmit={() => {
            // socket.disconnect();
            router.refresh("/");
          }}
        >
          <button className="bg-orange-300 text-white px-8 py-2 fixed top-4 right-10 rounded-md">
            Next
          </button>
        </form>
      </div>
    </>
  );
}

export default Chatroom;
