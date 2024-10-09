import React from "react";
import NavBar from "../_components/NavBar";
import SideBar from "../_components/SideBar";
import VideoBox from "../_components/VideoBox";

function page() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="flex">
        <SideBar />
        <VideoBox />
        {/* <ChatBox /> */}
      </div>
    </>
  );
}

export default page;
