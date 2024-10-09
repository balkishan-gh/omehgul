"use client";

import React, { useEffect, useRef, useState } from "react";

function VideoBox() {
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
      <div className="flex flex-col gap-y-4 w-[900px] items-start justify-center p-4">
        <div className="w-full md:w-[450px] h-[615px] md:h-[337.5px] bg-blue-400 rounded-md"></div>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          height={450}
          width={450}
          className="rounded-md w-full md:w-[450px]"
        ></video>
      </div>
    </div>
  );
}

export default VideoBox;
