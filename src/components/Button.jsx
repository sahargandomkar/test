"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

export const Button = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex gap-2 items-center">
       
        <p className="font-bold text-sm">{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className=" hover:bg-slate-800 bg-slate-900 text-white px-6 py-2 rounded-full"
        >
          SignOut
        </button>
        <Image   alt="profile" src={session.user.image} width={37} height={37} className="rounded-full border   border-slate-900"/>
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={() => signIn("github")}
        className=" hover:bg-slate-800 bg-slate-900 text-white px-6 py-2 rounded-full"
      >
        SignIn
      </button>
    </div>
  );
};
