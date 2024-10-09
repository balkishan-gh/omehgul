import Image from "next/image";
import React from "react";

function Mid() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between  mx-auto max-w-[1280px]">
      <div className="flex flex-col">
        <div className="text-3xl font-bold px-4 tracking-wide">
          From strangers to friends, the journey just got easy.
        </div>
        <div className="text-lg font-bold px-4 mt-20 tracking-wide">
          Start chatting:
        </div>
        <div className="flex items-center gap-x-4 mt-2 px-4 tracking-wide">
          <button className="bg-blue-500 text-white rounded-md px-10 sm:px-16 py-2 font-semibold">
            Video
          </button>
          <button className=" text-blue-500 border-[1px] border-blue-500 rounded-md px-10 sm:px-16 py-2 font-semibold">
            Text
          </button>
        </div>
        <select
          name="interest"
          id="interest"
          className="py-2 focus:outline-none rounded-md w-[300px] mx-4 mt-4 tracking-wide bg-blue-100"
        >
          <option value="">Add interests (optional)</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="gay">Gay</option>
          <option value="lesbian">Lesbian</option>
          <option value="lesbian">Attack Helicopter</option>
        </select>
      </div>
      <Image
        src={"/images/omehgul.png"}
        height={750}
        width={750}
        alt="hero image"
        className=""
      />
    </div>
  );
}

export default Mid;
