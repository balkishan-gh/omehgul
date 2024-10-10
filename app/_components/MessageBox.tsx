import { SendHorizontal } from "lucide-react";
import React from "react";

function MessageBox() {
  return (
    <div>
      <div className="flex flex-col gap-y-4 mt-16 w-[755px] p-4 flex-shrink">
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          libero?
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          libero?
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          libero?
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          libero?
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
        <div className="bg-gray-300 px-4 py-2 rounded-full self-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          libero?
        </div>
        <div className="bg-orange-300 px-4 py-2 rounded-full self-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab.
        </div>
      </div>
      <div className="p-4">
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
