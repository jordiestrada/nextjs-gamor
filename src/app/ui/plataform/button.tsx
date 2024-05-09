
import { Plataforma } from '@/app/lib/definitions'
import { fetchPlataforma } from '../../lib/data'

export default async function Button() {
    const plataforms = await fetchPlataforma();

    return(

        <div className="rounded-full dark:bg-gray-900 grid grid-cols-3 mb-8">

            {plataforms.map((plat: { plataforma: string, id: string }, i: number) => {
                return (
                    <button key={plat.id} className="items-center justify-right gap-2 rounded-full m-1 p-1 text-sm font-medium md:hover:bg-gray-800 md:hover:text-gray-300 md:flex-none md:justify-start 
  md:p-2 md:px-3">
                        <div className="hidden md:block md:text-gray-400 font-medium">{plat.plataforma}</div>
                    </button>

                );
            }
            )}



        </div>

    );
}
//{`flex ${plataf===0?'md:bg-gray-600':''}
//onClick={() => { setNumber(a=>a=0); }}