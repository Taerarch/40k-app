import { useMemo } from "react";
import { useApolloClient } from "@ts-gql/apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let apolloClient;

type TSGQLApolloClient = ReturnType<typeof useApolloClient>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      // TODO: Make this dynamic so it doesn't break in prod
      uri: `${process.env.apolloURL}/admin/api`, // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null): TSGQLApolloClient {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState = null): TSGQLApolloClient {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
