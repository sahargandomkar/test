"use client";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export const GithubLogin = () => {
  return (
    <div className="grid justify-center mt-40 mx-auto">
   <button
        onClick={() => signIn("github")}
        className="flex justify-center w-60 rounded-md items-center bg-slate-950 my-4 px-6  py-3 text-sm font-semibold leading-6 text-white  hover:bg-slate-800"
      >
        <FaGithub className="w-5 h-5 mx-2" /> Sign in with GitHub
      </button>
  </div>)
};
