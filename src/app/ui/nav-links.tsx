'use client'

import {
  UserGroupIcon,
  HomeIcon,
  SignalIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Streams', href: '/streams', icon: SignalIcon },
  { name: 'Party', href: '/party', icon: UserGroupIcon },
  { name: 'Premium', href: '/premium', icon: SparklesIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center text-gray-400 justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-violet-400 hover:dark:text-orange-400
            ${pathname==link.href?'text-violet-400 dark:text-orange-400':''}
            `}
          >
            <LinkIcon className="w-6 block md:hidden" /> 
            <p className="hidden md:block">{link.name}</p> 
            {/* <p>{link.name}</p> */}
          </Link>
        );
      })}
    </>
  );
}
