import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className="invert dark:invert-0 sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-secondary dark:bg-secondary border-r-gray-50"
      >
        <div className="flex justify-center">
          <Link href="/" className="flex items-center gap-1 ">
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
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
