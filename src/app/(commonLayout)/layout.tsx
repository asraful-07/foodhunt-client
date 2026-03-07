import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-amber-600 p-6 text-2xl text-white mb-4 flex justify-between items-center">
        <h1>Navbar</h1>
        <Button>
          <Link href={"/login"}>Login</Link>
        </Button>
      </div>
      <div className="min-h-[calc(100vh-240px)]"> {children}</div>
      <div>Footer</div>
    </>
  );
}
