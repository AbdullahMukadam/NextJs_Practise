"use client";

import Link from "next/link";


export default function Home() {


  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center flex-col">
      <h1 className="text-white">Go to Recipes</h1>
      <Link href={"/recipes"} className="text-white border-2 border-white p-2 rounded-lg mt-2">Recipes</Link>
    </div>
  );
}
