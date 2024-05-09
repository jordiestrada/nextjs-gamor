import { fetchCategoria } from '../lib/data'
import Link from 'next/link';
import Image from 'next/image';



export default async function categorias() {
  const categoria = await fetchCategoria();
  return (
    <div className="text-gray-400 pt-7 text-center items-start flex-row"><p className="text-center w-max">Trending Categories</p>
    <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl md:grid-cols-4 lg:grid-cols-8 lg:text-left py-8">
      {categoria.map((cat: { categoria: string, image:string, id: string}, i: number) => {
         const verImagen = "/"+ cat.image;
        return (
          
          <Link key={cat.id}
          href="" 
            className="m-1 group rounded-lg border-transparent transition-colors inline text-gray-400 bg-gray-200 dark:bg-gray-900 p-4 text-xs">
            {/* <LinkIcon className="w-6 block md:hidden" />  */}
            <Image 
           alt={cat.categoria}
           src={verImagen}
           width={100}
           height={100}
           />
            <h2 className="mb-3 block text-gray-400 text-xs">
              /{++i}

            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 block text-gray-400 font-semibold">
              {cat.categoria}
            </p>
            <h2 className="block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-gray-400">
              -&gt;
            </h2>
           
          </Link>

          
        );
      })}
      
    </div>
    </div>
  );
}

