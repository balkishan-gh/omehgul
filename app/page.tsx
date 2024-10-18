"use client";

import React, { useState } from "react";
import NavBar from "./_components/NavBar";
import Mid from "./_components/Mid";
import Chatroom from "./_components/Chatroom";

function page() {
  const [isVideo, setIsVideo] = useState(null);
  const isVideoHandler = (value: any) => {
    setIsVideo(value);
  };

  if (isVideo === null) {
    return (
      <>
        <NavBar />
        <Mid isVideoHandler={isVideoHandler} />
        {/* <Chatroom /> */}
      </>
    );
  }
  return <Chatroom isVideo={isVideo}/>;
}

export default page;
