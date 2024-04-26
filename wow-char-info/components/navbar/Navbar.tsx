import Image from "next/image";
import React from "react";
import { ModeToggle } from "../toggle-theme";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between fixed z-50 w-full gap-5 p-6 sm:px-12 bg-secondary shadow-md dark:shadow-none">
      <div className="flex gap-1 px-2 rounded-lg font-bold items-center cursor-pointer transition-colors duration-300 ease-in-out group">
        <span className="font-extrabold text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
          Char
        </span>
        <Image
          src="/wow-icon.svg"
          alt="World of Warcraft logo"
          width={24}
          height={24}
          className="group-hover:animate-bounce repeat-infinite"
        />
        <span className="font-extrabold text-red-700 dark:text-red-400 group-hover:text-red-600 dark:group-hover:text-red-500">
          Info
        </span>
      </div>
      <div className="flex gap-3">
        <ModeToggle />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
