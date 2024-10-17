import { SendHorizontal } from "lucide-react";
import React from "react";

function MessageBox() {
  return (
    <div className="h-[92vh] overflow-y-scroll flex">
      <div className="flex flex-col gap-y-4 mt-16 w-[755px] p-4 flex-shrink">
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start max-w-[300px]">
          Hi Yash
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end max-w-[300px]">
          Hello BK
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start max-w-[300px]">
          Kya kar rha hai??
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start max-w-[300px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          libero?
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start max-w-[300px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          libero?
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start max-w-[300px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          libero?
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
      </div>
      <div className="p-4 fixed bottom-0 w-[100%] md:w-[73.5%] lg:w-[50%]">
        <form>
          <div className="flex items-center justify-between bg-white px-4 py-2 rounded-full">
            <textarea className="resize-none focus:outline-none w-[90%] h-6"></textarea>
            <SendHorizontal />
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
