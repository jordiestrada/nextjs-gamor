
import Usuarios from "@/app/ui/users";
import SideCat from "@/app/ui/sidecat";
import Plataform from "@/app/ui/plataform";


export default function Home() {

  return (
    <div>
      <div className="grid grid-cols-3 divide-x-0 grow justify-between w-full pt-6">
        <div className=" bg-gray-200 dark:bg-gray-600 rounded-l-lg">01</div>
        <div className="bg-violet-400 dark:bg-orange-400"><Usuarios /></div>
         <Plataform />
      </div>
      <div className="text-gray-400 pt-7 text-center items-start flex-row"><p className="text-center w-max">Trending Categories</p></div>
      <SideCat />
    </div>


  );
}