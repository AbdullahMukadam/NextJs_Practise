"use client";

import Link from "next/link";


export default function Home() {


  return (
    <div className="w-full min-h-screen bg-black">
      <h1 className="text-white">Go to Recipes</h1>
      <Link href={"/recipes"} className="text-white">Recipes</Link>
    </div>
  );
}
