"use client";

import { useSession } from "next-auth/react";


import { GithubLogin } from "@/components/GitHubLogin";

export const Profile = () => {

       const { data: session, status } = useSession();

    if (status === "authenticated") {
      return (
        <main className=" grid items-center justify-center py-20 shadow-md max-w-80 mx-auto p-8 rounded-md mt-40 bg-slate-800">
           <div className="flex  gap-2 items-center mx-auto">
            <p className="font-medium text-sm text-white"> Welcome </p>
            <span className="font-bold text-sm text-purple-300">
              {session.user.name}
            </span>
          </div>
          <div className="font-bold items-center mx-auto text-white py-4">{session.user.email}</div>
        </main>
      );
     
    };

    return   (
    <GithubLogin/>
    );
  }
