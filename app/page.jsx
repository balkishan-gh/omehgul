"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import NavBar from "./_components/NavBar";
import Mid from "./_components/Mid";
import Chatroom from "./_components/Chatroom";
import { useSocket } from "./_components/SocketProvider";

function page() {
  const [isVideo, setIsVideo] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [localVideoTrack, setlocalVideoTrack] = useState(null);
  const [joined, setJoined] = useState(false);
  const videoRef = useRef(null);
  const { socket } = useSocket();

  console.log(joined);
  console.log(localVideoTrack);
  console.log("Line no. 18");

  // useEffect(() => {
  //   if (videoRef && videoRef.current) {
  //     getCam();
  //   }
  // }, [videoRef]);

  const joinCall = useCallback(() => {
    socket.emit("join-video", { message: "Joining...", id: socket.id });
    setJoined(true);
  }, []);

  const getCam = async () => {
    const stream = await window.navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    // MediaStream
    const audioTrack = stream.getAudioTracks()[0];
    const videoTrack = stream.getVideoTracks()[0];
    setLocalAudioTrack(audioTrack);
    setlocalVideoTrack(videoTrack);
    if (!videoRef.current) {
      return;
    }
    videoRef.current.srcObject = new MediaStream([videoTrack]);
  };

  const isVideoHandler = (value) => {
    setIsVideo(value);
  };

  if (isVideo === null && joined === false) {
    return (
      <>
        <NavBar />
        <Mid
          isVideoHandler={isVideoHandler}
          joinCall={joinCall}
          getCam={getCam}
        />
      </>
    );
  }
  return (
    <Chatroom
      isVideo={isVideo}
      audioTrack={localAudioTrack}
      videoTrack={localVideoTrack}
    />
  );
}

export default page;
