import React from "react";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-orange-600 p-4 mb-4 text-white font-semibold">
        Navbar
      </div>
      <div className="min-h-[calc(100vh-240px)]"> {children}</div>
      <div>Footer</div>
    </>
  );
}
