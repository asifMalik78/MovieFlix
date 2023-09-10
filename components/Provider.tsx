"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children}: ProviderProps) {
  return (
    <SessionProvider>{children}</SessionProvider>
  );
}
