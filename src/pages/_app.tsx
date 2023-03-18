import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "@/lib/apolloClient";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const client = initializeApollo();
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}
