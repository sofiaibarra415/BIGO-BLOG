'use client';
import { AppContextProvider } from "@/context/AppContext";
import React from "react";

interface Layout {
  children: React.ReactNode;
}

export default function Layout({ children }: Layout) {
  return <AppContextProvider>{children}</AppContextProvider>;
}
