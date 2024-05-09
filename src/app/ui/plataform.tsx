"use client"
import { useState } from 'react';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/24/outline';

export default function Plataform() {
    const [plataf, setNumber] = useState('Party');//0-party,1-Machts, 2-Streams
    
    return (
        <div className="bg-gray-200 dark:bg-gray-600 rounded-r-lg p-6">
            <span>01. Choose Plataform</span>
            <div className="rounded-full dark:bg-gray-900 grid grid-cols-3 mb-8">
                
                <button className={`flex ${plataf==='Party'?'md:bg-gray-600':''} items-center justify-right gap-2 rounded-full m-1 p-1 text-sm font-medium md:hover:bg-gray-800 md:hover:text-gray-300 md:flex-none md:justify-start 
  md:p-2 md:px-3`} onClick={() => { setNumber(a=>a='Party'); }}>
                    <div className="hidden md:block md:text-gray-400 font-medium">Party</div>
                </button>
                <button className={`flex ${plataf==='Machts'?'md:bg-gray-600':''} items-center justify-right gap-2 rounded-full m-1 p-1 text-sm font-medium md:hover:bg-gray-800 md:hover:text-gray-300 md:flex-none md:justify-start 
  md:p-2 md:px-3`} onClick={() => { setNumber(a=>a='Machts'); }}>

                    <div className="hidden md:block md:text-gray-400 font-medium">Machts</div>
                </button>
                <button className={`flex ${plataf==='Streams'?'md:bg-gray-600':''} items-center justify-right gap-2 rounded-full m-1 p-1 text-sm font-medium md:hover:bg-gray-800 md:hover:text-gray-300 md:flex-none md:justify-start 
  md:p-2 md:px-3`} onClick={() => { setNumber(a=>a='Streams'); }}>

                    <div className="hidden md:block md:text-gray-400 font-medium">Streams</div>
                </button>
            </div>

            <span className="mt-4">02. Searching Game</span>
            <div className="rounded-full dark:bg-gray-900 grid grid-cols-3">

            <Link
            href="/juegos"
            className="flex md:bg-black h-[48px] items-center justify-right gap-2 md:border-2 md:border-gray-400 rounded-full p-3 text-sm font-medium md:hover:bg-gray-900 md:hover:text-gray-300 md:flex-none md:justify-start md:p-2 md:px-3">
            <LinkIcon className="w-6 block md:hidden" /> 
            <p className="hidden md:block">Search Now</p> 
          </Link>
            </div>
        </div>
    );
}