import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { ClientProvider } from "@/components/client";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  console.log("pageProps", session, pageProps);
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <ClientProvider>
          <Component {...pageProps} />
        </ClientProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}
