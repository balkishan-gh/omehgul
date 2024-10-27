"use client";

import { cn } from "@/libs/utils";
import React, { useEffect, useRef, useState } from "react";
import { useSocket } from "./SocketProvider";

function VideoBox({ isVideo, audioTrack, videoTrack }) {
  const [sendingPc, setSendingPc] = useState(null);
  const [receivingPc, setReceivingPc] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [localVideoTrack, setlocalVideoTrack] = useState(null);
  const [remoteVideoTrack, setRemoteVideoTrack] = useState(null);
  const [remoteAudioTrack, setRemoteAudioTrack] = useState(null);
  const [lobby, setLobby] = useState(true);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const { socket } = useSocket();

  console.log("Line no. 24");
  console.log(videoTrack);

  useEffect(() => {
    if (!socket) {
      return;
    }

    // Get the local media stream (camera & microphone)
    // navigator.mediaDevices
    //   .getUserMedia({ video: true, audio: true })
    //   .then((stream) => {
    //     setLocalStream(stream);
    // localVideoRef.current.srcObject = stream;

    // const audioTrack = stream.getAudioTracks()[0];
    // const videoTrack = stream.getVideoTracks()[0];
    // setLocalAudioTrack(audioTrack);
    // setlocalVideoTrack(videoTrack);
    // localVideoRef.current.srcObject = new MediaStream([videoTrack]);
    // localVideoRef.current.play();
    //   })
    //   .catch((err) => console.error("Error accessing media devices.", err));

    // Socket.io event listener
    socket.on("send-offer", handleSendOffer);
    socket.on("offer", handleReceiveOffer);
    socket.on("answer", handleReceiveAnswer);
    socket.on("ice-candidate", handleAddIceCandidate);

    // Clean up on component unmount
    return () => {
      socket.off("send-offer", handleSendOffer);
      socket.off("offer", handleReceiveOffer);
      socket.off("answer", handleReceiveAnswer);
      socket.off("ice-candidate", handleAddIceCandidate);
    };
  }, [socket, localVideoRef]);

  const handleSendOffer = async ({ id }) => {
    console.log("sending offer");
    setLobby(false);
    const pc = new RTCPeerConnection();

    console.log("Line no. 65");
    console.log(pc);

    setSendingPc(pc);

    if (videoTrack) {
      console.log("Line no. 70");
      console.error("added tack");
      console.log(videoTrack);
      pc.addTrack(videoTrack);
    }
    if (audioTrack) {
      console.error("added tack");
      console.log(audioTrack);
      pc.addTrack(audioTrack);
    }

    // localStream?.getTracks().forEach((track) => {
    //   if (track.kind === "video") {
    //     pc.addTrack(track, localStream); // Add video first
    //   }
    //   console.log("Line no. 64");
    //   console.log(pc);
    // });
    // localStream?.getTracks().forEach((track) => {
    //   if (track.kind === "audio") {
    //     pc.addTrack(track, localStream); // Add audio after video
    //   }
    //   console.log("Line no. 71");
    //   console.log(pc);
    // });

    pc.onicecandidate = async (e) => {
      console.log("receiving ice candidate locally");
      if (e.candidate) {
        socket.emit("ice-candidate", {
          candidate: e.candidate,
          type: "sender",
          id: id,
        });
      }
    };

    pc.onnegotiationneeded = async () => {
      console.log("on negotiation neeeded, sending offer");
      const offer = await pc.createOffer();
      //@ts-ignore
      pc.setLocalDescription(offer);
      socket.emit("offer", { offer, id });
    };
    console.log("Line no. 110");
  };

  const handleReceiveOffer = async ({ offer, id }) => {
    console.log("received offer");
    setLobby(false);
    const pc = new RTCPeerConnection();
    pc.setRemoteDescription(offer);
    const answer = await pc.createAnswer();
    //@ts-ignore
    pc.setLocalDescription(answer);
    const stream = new MediaStream();
    console.log("Line no. 100");
    console.log(stream);
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = stream;
    }

    setReceivingPc(pc);

    // pc.ontrack = (e) => {
    //   alert("ontrack");
    //   console.error("inside ontrack");
    //   const { track, type } = e;
    //   if (type == "audio") {
    //     // setRemoteAudioTrack(track);
    //     // @ts-ignore
    //     remoteVideoRef.current.srcObject.addTrack(track);
    //   } else {
    //     // setRemoteVideoTrack(track);
    //     // @ts-ignore
    //     remoteVideoRef.current.srcObject.addTrack(track);
    //   }
    //   //@ts-ignore
    //   // remoteVideoRef.current.play();
    // };

    pc.onicecandidate = async (e) => {
      if (!e.candidate) {
        return;
      }
      console.log("on ice candidate on receiving side");
      if (e.candidate) {
        socket.emit("add-ice-candidate", {
          candidate: e.candidate,
          type: "receiver",
          id,
        });
      }
    };

    socket.emit("answer", { answer, id });

    setTimeout(() => {
      const track1 = pc.getTransceivers()[0].receiver.track;
      const track2 = pc.getTransceivers()[1].receiver.track;
      console.log(track1);
      if (track1.kind === "video") {
        setRemoteAudioTrack(track2);
        setRemoteVideoTrack(track1);
      } else {
        setRemoteAudioTrack(track1);
        setRemoteVideoTrack(track2);
      }
      //@ts-ignore
      remoteVideoRef?.current?.srcObject.addTrack(track1);
      //@ts-ignore
      remoteVideoRef?.current?.srcObject.addTrack(track2);
      //@ts-ignore
      // remoteVideoRef.current.play();
      // if (type == 'audio') {
      //     // setRemoteAudioTrack(track);
      //     // @ts-ignore
      //     remoteVideoRef.current.srcObject.addTrack(track)
      // } else {
      //     // setRemoteVideoTrack(track);
      //     // @ts-ignore
      //     remoteVideoRef.current.srcObject.addTrack(track)
      // }
      // //@ts-ignore
    }, 5000);
  };

  const handleReceiveAnswer = ({ answer, id }) => {
    setLobby(false);
    setSendingPc((pc) => {
      pc?.setRemoteDescription(answer);
      return pc;
    });

    console.log("loop closed");
  };

  const handleAddIceCandidate = ({ candidate, type, id }) => {
    console.log("add ice candidate from remote");
    console.log({ candidate, type });
    if (type == "sender") {
      setReceivingPc((pc) => {
        if (!pc) {
          console.error("receiving pc not found");
        } else {
          // console.error(pc.ontrack);
        }
        pc?.addIceCandidate(candidate);
        return pc;
      });
    } else {
      setSendingPc((pc) => {
        if (!pc) {
          console.error("sending pc not found");
        } else {
          // console.error(pc.ontrack)
        }
        pc?.addIceCandidate(candidate);
        return pc;
      });
    }
  };

  useEffect(() => {
    console.log("Line no. 47");
    console.log(videoTrack);
    if (localVideoRef.current) {
      if (videoTrack) {
        localVideoRef.current.srcObject = new MediaStream([videoTrack]);
        // localVideoRef.current.play();
      }
    }
  }, [localVideoRef]);

  return (
    <div>
      <div className="font-semibold text-3xl md:text-lg p-4">Chatroom</div>
      <div
        className={cn(
          isVideo === true ? "flex" : "hidden",
          "flex-col gap-y-4 items-start justify-center p-4 lg:flex"
        )}
      >
        {/* <div className="w-full md:w-[450px] h-[615px] md:h-[337.5px] bg-blue-400 rounded-md"></div> */}
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          muted
          height={450}
          width={450}
          controls
          className="rounded-md w-full md:w-[450px]"
        ></video>
        <video
          ref={localVideoRef}
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
