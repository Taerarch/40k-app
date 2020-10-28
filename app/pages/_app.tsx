import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

import LoginControl from "../components/LoginControl";

const AppComponent = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <LoginControl />
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
};

export default AppComponent;
