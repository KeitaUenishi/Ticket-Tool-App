import { initializeApollo } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { useSession } from "next-auth/react";
import React, { ReactNode } from "react";

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  // TODO: SSR時にはuseSessionは使えない。tokenをどうやって取得するか。
  // NOTE: https://next-auth.js.org/getting-started/client#usesession
  const session = useSession();
  console.log("session", session);
  const client = initializeApollo(session.data?.user?.accessToken ?? "");
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
