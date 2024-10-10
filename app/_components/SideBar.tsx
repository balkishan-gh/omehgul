import Image from "next/image";
import React from "react";

function SideBar() {
  return (
    <div className="border-r-[1px] border-gray-300 hidden md:block">
      <div className="flex items-center justify-center gap-x-2 p-4 pr-10">
        <Image src={"/images/logo.png"} width={40} height={40} alt="Logo" />
        <span className="text-orange-400 font-extrabold text-3xl font-sans tracking-wide self-end">
          omehgul
        </span>
      </div>
      <div className="flex flex-col items-start p-4 pr-10 gap-y-4">
        <div className="font-semibold text-orange-400">Now</div>
        <div className="flex flex-col">
          <div className="flex flex-col hover:bg-orange-300 px-4 py-2 rounded-md">
            <div>
              <span className="font-semibold">New York, USA</span> (00:59:00)
            </div>
            <div>40.7128° N, 74.0060° W</div>
          </div>
        </div>
        <div className="font-semibold text-orange-400">Today</div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col hover:bg-orange-300 px-4 py-2 rounded-md">
            <div>
              <span className="font-semibold">New York, USA</span> (00:59:00)
            </div>
            <div>40.7128° N, 74.0060° W</div>
          </div>
          <div className="flex flex-col hover:bg-orange-300 px-4 py-2 rounded-md">
            <div>
              <span className="font-semibold">New York, USA</span> (00:59:00)
            </div>
            <div>40.7128° N, 74.0060° W</div>
          </div>
          <div className="flex flex-col hover:bg-orange-300 px-4 py-2 rounded-md">
            <div>
              <span className="font-semibold">New York, USA</span> (00:59:00)
            </div>
            <div>40.7128° N, 74.0060° W</div>
          </div>
        </div>
        <div className="font-semibold text-orange-400">Last week</div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col hover:bg-orange-300 px-4 py-2 rounded-md">
            <div>
              <span className="font-semibold">New York, USA</span> (00:59:00)
            </div>
            <div>40.7128° N, 74.0060° W</div>
          </div>
          <div className="flex flex-col hover:bg-orange-300 px-4 py-2 rounded-md">
            <div>
              <span className="font-semibold">New York, USA</span> (00:59:00)
            </div>
            <div>40.7128° N, 74.0060° W</div>
          </div>
          <div className="flex flex-col hover:bg-orange-300 px-4 py-2 rounded-md">
            <div>
              <span className="font-semibold">New York, USA</span> (00:59:00)
            </div>
            <div>40.7128° N, 74.0060° W</div>
          </div>
          <div className="flex flex-col hover:bg-orange-300 px-4 py-2 rounded-md">
            <div>
              <span className="font-semibold">New York, USA</span> (00:59:00)
            </div>
            <div>40.7128° N, 74.0060° W</div>
          </div>
          <div className="flex flex-col hover:bg-orange-300 px-4 py-2 rounded-md">
            <div>
              <span className="font-semibold">New York, USA</span> (00:59:00)
            </div>
            <div>40.7128° N, 74.0060° W</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
