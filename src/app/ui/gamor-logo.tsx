import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import { Lusitana } from 'next/font/google';
//  const lusitana = Lusitana({ weight:'400' ,subsets: ['latin'] });
 import { lusitana } from '@/app/ui/fonts';
export default function GamorLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-gray-400`}
    >
      <GlobeAltIcon className="w-6 rotate-[15deg] md:hidden" />
      <p className="hidden md:text-[44px] md:block">Gamor</p>
    </div>
  );
}
