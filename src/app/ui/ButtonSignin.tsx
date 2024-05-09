"use client";
import { signIn } from "next-auth/react";

export default function ButtonSignin() {
  return (


        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={async () => {
            const result = await signIn("github", {
              callbackUrl: "/dashboard",
              redirect: false,
            });
            console.log(result);
          }}
        >
          Sig in
        </button>

  );
}