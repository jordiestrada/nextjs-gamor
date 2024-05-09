import Image from 'next/image';
import { fetchJuegosVista } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const juegos = await fetchJuegosVista();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {juegos?.map((juego:{ juego: string, image:string, id: string}) => (
              <div
                key={juego.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={juego.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${juego.name}'s profile picture`}
                      /> */}
                      <p>{juego.juego}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Juego
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {juegos?.map((juego:{ juego: string, image:string, id: string}) => (
                <tr
                  key={juego.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{juego.juego}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
