import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <div className="flex items-center justify-between py-8 px-4 mx-auto max-w-[1280px]">
      <div className="flex items-center justify-center gap-x-2">
        <Image src={"/images/logo.png"} width={40} height={40} alt="Logo" />
        <span className="text-orange-400 font-extrabold text-3xl font-sans tracking-wide self-end">
          omehgul
        </span>
      </div>
      <div className="md:flex items-center gap-x-12 font-semibold hidden tracking-wide">
        <div>Home</div>
        <div>Share</div>
        <div>About Us</div>
        <div>Rules</div>
        <div>Settings</div>
      </div>
      <AlignJustify className="md:hidden"/>
    </div>
  );
}

export default NavBar;
