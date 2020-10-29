/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

import LoginControl from "../components/LoginControl";
import { palette } from "../../palette";

const Page = (props) => (
  <div
    css={{
      maxWidth: 640,
      margin: "auto",
    }}
    {...props}
  />
);

const Header = () => (
  <div css={{ padding: 24, backgroundColor: palette.purple400 }}>
    <div
      css={{
        maxWidth: 640,
        margin: "auto",
      }}
    >
      <LoginControl />
    </div>
  </div>
);

const Content = (props) => (
  <div css={{ backgroundColor: "white", padding: 24 }} {...props} />
);

const AppComponent = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0px;
            background-color: ${palette.green400};
          }
        `}
      />
      <ApolloProvider client={apolloClient}>
        <Header />
        <Page>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Page>
      </ApolloProvider>
    </>
  );
};

export default AppComponent;
