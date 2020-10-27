import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { KeystoneProvider } from "@keystonejs/apollo-helpers";

const client = new ApolloClient({
  link: new HttpLink({ uri: "/admin/api" }),
  cache: new InMemoryCache(),
});

const AppComponent = ({ Component }) => {
  return (
    <div>
      <ApolloProvider client={client}>
        <KeystoneProvider>
          <Component />
        </KeystoneProvider>
      </ApolloProvider>
    </div>
  );
};

export default AppComponent;
