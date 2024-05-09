
import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import GamorLogo from '@/app/ui/gamor-logo';
import {  UserIcon } from '@heroicons/react/24/outline';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from "next-auth/react";
import ButtonSignout from "../ui/ButtonSignout";
import { getServerSession } from "next-auth";

function Login() {
  return(
<Link
          href="/login"
          className="flex h-[48px] grow items-center text-gray-400 justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-violet-400 hover:dark:text-orange-400"
          // className="flex items-center gap-5 self-start rounded-lg px-6 py-3 text-sm font-medium text-gray-400 transition-colors hover:italic md:block"
        >
          <UserIcon className="w-6 block md:hidden" />
          {/* <span className="hidden md:w-14 md:text-gray-400">Sign in</span> */}
          <div className="hidden md:block md:w-28 md:text-gray-400 md:text-sm md:font-medium md:hover:text-violet-400 md:hover:dark:text-orange-400">Sign in</div>
          {/* <ArrowRightIcon className="w-5 md:w-6" />  */}

        </Link>
  );
}
export default async function SideNav() {
  const session = await getServerSession();
  
  return (

    <div className="flex w-full flex-row px-3 py-4 md:py-2">
      <div className="flex flex-col grow justify-between space-x-2 md:flex-row md:space-y-0 md:space-x-2">
        <NavLinks />
        <div className="hidden h-[48px] w-full grow rounded-md md:block"></div>
        {/* <Link className="mb-2 flex h-[48px] items-center justify-start rounded-md p-4 md:h-[48px]" href="https://gamor.com/">
          <div className="w-32 text-gray-400 md:w-32">
            <GamorLogo />
          </div>
        </Link> */}
        <Link
          key="https://gamor.com/"
          href="https://gamor.com/"
          className="flex h-[48px] grow items-center text-gray-400 justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-violet-400 hover:dark:text-orange-400">
          <GamorLogo />

          {/* <LinkIcon className="w-6 block md:hidden" /> 
            <p className="hidden md:block">{link.name}</p>  */}
          {/* <p>{link.name}</p> */}
        </Link>
        <div className="hidden h-[48px] w-full grow rounded-md md:block"></div>
       
        {session?"":<Login />}
        {session?<ButtonSignout />:""}
        
        <button className="flex md:bg-black h-[48px] items-center justify-right gap-2 md:border-2 md:border-gray-400 rounded-full p-3 text-sm font-medium md:hover:bg-gray-900 md:hover:text-gray-300 md:flex-none md:justify-start md:p-2 md:px-3">
          {/* <PowerIcon className="w-6" />  */}
          <div className="hidden md:block md:w-28 md:text-gray-400 md:text-sm md:font-medium">Create account</div>
        </button>

      </div>
    </div>
  );
}
