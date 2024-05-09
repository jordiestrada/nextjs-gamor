"use client"
import { signOut } from "next-auth/react";
import {  UserIcon } from '@heroicons/react/24/outline';

function ButtonSignout() {
  return (
    
    <button
      onClick={() => {
        signOut();
      }}
      className="hidden md:block md:w-28 md:text-gray-400 md:text-sm md:font-medium md:hover:text-violet-400 md:hover:dark:text-orange-400"
    >
      <UserIcon className="w-6 block md:hidden" />
          {/* <span className="hidden md:w-14 md:text-gray-400">Sign in</span> */}
          <div className="hidden md:block md:w-28 md:text-gray-400 md:text-sm md:font-medium md:hover:text-violet-400 md:hover:dark:text-orange-400">Sign out</div>
    </button>
  );
}
export default ButtonSignout;

