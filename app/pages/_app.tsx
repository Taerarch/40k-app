/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import { ApolloProvider } from "@apollo/client";
import Link from "next/link";
import { useApollo } from "../lib/apolloClient";

import LoginControl from "../components/LoginControl";
import { colours } from "../lib/colours";

const Page = (props) => (
  <div
    css={{
      maxWidth: 640,
      margin: "auto",
    }}
    {...props}
  />
);

const HeaderLink = ({ href, ...rest }) => (
  <Link href={href}>
    <a
      css={{
        paddingRight: 8,
        paddingLeft: 8,
        color: colours.grey200,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colours.red400,
        border: `1px solid ${colours.red800}`,
      }}
      {...rest}
    />
  </Link>
);

const Header = () => (
  <div
    css={{
      padding: 24,
      backgroundColor: colours.red700,
      color: colours.grey200,
    }}
  >
    <div css={{ display: "flex" }}>
      <HeaderLink href="/">Hoem</HeaderLink>
      <HeaderLink href="/battle">Battels</HeaderLink>
      <HeaderLink href="/admin">Admine</HeaderLink>
      <div css={{ marginLeft: "auto" }}>
        <LoginControl />
      </div>
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
            background-color: ${colours.grey500};
          }
        `}
      />
      {/* @ts-ignore */}
      <ApolloProvider client={apolloClient}>
        <Page>
          <Header />
          <Content>
            <Component {...pageProps} />
          </Content>
        </Page>
      </ApolloProvider>
    </>
  );
};

export default AppComponent;
