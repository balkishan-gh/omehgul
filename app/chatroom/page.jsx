import React from "react";
import SideBar from "../_components/SideBar";
import VideoBox from "../_components/VideoBox";
import MessageBox from "../_components/MessageBox";

function page() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="flex">
        <SideBar />
        <VideoBox />
        <MessageBox />
      </div>
    </>
  );
}

export default page;
