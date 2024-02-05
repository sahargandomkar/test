import Link from "next/link";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <div className=" max-w-fit mx-auto py-5">
      <div className="flex flex-row gap-x-80  text-slate-950 font-medium">
        <div className=" hover:text-purple-800">
          <Link href={"/"}> Home</Link>
        </div>
        <Button />
      </div>
    </div>
  );
};
