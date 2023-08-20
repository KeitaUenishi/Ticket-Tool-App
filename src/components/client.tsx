import { initializeApollo } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { useSession } from "next-auth/react";
import React, { ReactNode } from "react";

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const session = useSession();
  const client = initializeApollo(session.data?.user?.accessToken ?? "");
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
