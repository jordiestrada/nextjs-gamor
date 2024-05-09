"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import ButtonSignout from "../../ui/ButtonSignout";

function ProfilePage() {
  const { data: session, status, update } = useSession();

  if (status === "loading") return <div>Loading...</div>;
  // if (status === "authenticated")
  return (
    <div>
      <div className="bg-slate-300 p-10 text-center">
      
        <h1>Bievenido {session?.user?.name}</h1>
        <p>{session?.user?.email}</p>
        <Image
          src={session?.user?.image || ""}
          alt="Image profile"
          width={200}
          height={200}
        />
        <ButtonSignout />
        
      </div>
    </div>
  );
}

export default ProfilePage;
