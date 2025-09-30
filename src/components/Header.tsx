import React from "react";
import { Bell } from "lucide-react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Image from "next/image";
import { UserButton, SignUpButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-6 sm:mb-8">
      <Image src="/images/gasco-logo.png" alt="Gasco" width={200} height={100} />
      <h1 className="text-xl sm:text-2xl font-bold text-black">Finance Dashboard</h1>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full p-1.5 sm:p-2 flex items-center justify-center">
          <IoChatbubbleEllipsesOutline className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
        </div>
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full p-1.5 sm:p-2 flex items-center justify-center">
          <div className="relative">
            <Bell className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>

        <SignedIn>
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "37px",
                  height: "37px",
                },
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-2">
            <SignUpButton mode="modal">
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-lime-500 text-white text-xs sm:text-sm rounded-md hover:bg-lime-400 transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
