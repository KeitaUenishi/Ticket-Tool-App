import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "cross-fetch/polyfill";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const adminSecret = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET;
  // TODO: セキュリティ的に良くないため、サーバーサイドに移動する
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": adminSecret,
    },
  };
});

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};
