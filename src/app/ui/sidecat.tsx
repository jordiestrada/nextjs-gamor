
import { fetchCategoria } from '../lib/data'
import Link from 'next/link';



export default async function Sidecat() {
  const categoria = await fetchCategoria();
    return (
    <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left py-8">
      {categoria.slice(0, 7).map((cat: { categoria: string,id:string}, i: number) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={cat.id}
            href=""
            className="m-1 group rounded-lg border-transparent transition-colors inline text-gray-400 bg-gray-200 dark:bg-gray-900 p-4 text-xs">
            {/* <LinkIcon className="w-6 block md:hidden" />  */}
            <h2 className="mb-3 block text-gray-400 text-xs">
              /{++i}

            </h2>
            <p className="m-0 text-sm opacity-50 block text-gray-400 font-semibold">
              {cat.categoria}
            </p>
            <h2 className="block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-gray-400e">
              -&gt;
            </h2>
          </Link>
        );
      })}
      <Link
        key="View All"
        href="/categorias"
        className="m-1 group rounded-lg border-transparent transition-colors inline bg-gray-200 dark:bg-gray-900 p-4 text-gray-400 text-xs">
        {/* <LinkIcon className="w-6 block md:hidden" />  */}
        <h2 className="mb-3 text-xs text-gray-400">
          View All
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 text-gray-400 font-semibold">
          All categories
        </p>
        <span className="block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-gray-400">
          -&gt;
        </span>
      </Link>
    </div>
  );
}
