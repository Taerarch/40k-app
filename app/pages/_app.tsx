/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

import LoginControl from "../components/LoginControl";

const AppComponent = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <div>
          <LoginControl />
          <div css={{ maxWidth: 640, padding: 16 }}>
            <Component {...pageProps} />
          </div>
        </div>
      </ApolloProvider>
    </>
  );
};

export default AppComponent;
