import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "@/lib/apolloClient";
import { RecoilRoot } from "recoil";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const client = initializeApollo();
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}
