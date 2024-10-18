"use client";

import { cn } from "@/libs/utils";
import React, { useEffect, useRef, useState } from "react";

function VideoBox({ isVideo }) {
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [localVideoTrack, setlocalVideoTrack] = useState(null);
  const [joined, setJoined] = useState(false);
  const videoRef = useRef(null);

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

  useEffect(() => {
    if (videoRef && videoRef.current) {
      getCam();
    }
  }, [videoRef]);

  return (
    <div>
      <div className="font-semibold text-3xl md:text-lg p-4">Chatroom</div>
      <div
        className={cn(
          isVideo === true ? "flex" : "hidden",
          "flex-col gap-y-4 items-start justify-center p-4 lg:flex"
        )}
      >
        <div className="w-full md:w-[450px] h-[615px] md:h-[337.5px] bg-blue-400 rounded-md"></div>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          height={450}
          width={450}
          controls
          className="rounded-md w-full md:w-[450px]"
        ></video>
      </div>
    </div>
  );
}

export default VideoBox;
