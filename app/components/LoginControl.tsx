/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useMutation, useQuery } from "@ts-gql/apollo";
import { gql } from "@ts-gql/tag";

const AUTH_USER = gql`
  mutation signin($email: String, $password: String) {
    authenticate: authenticateUserWithPassword(
      email: $email
      password: $password
    ) {
      item {
        id
        name
      }
    }
  }
` as import("../../__generated__/ts-gql/signin").type;

export const AUTHED_USER = gql`
  query getAuthedUser1 {
    authenticatedUser {
      id
      name
    }
  }
` as import("../../__generated__/ts-gql/getAuthedUser1").type;

const LOG_OUT = gql`
  mutation unauthUser {
    unauthenticateUser {
      success
    }
  }
` as import("../../__generated__/ts-gql/unauthUser").type;

const styles = {};

const Login = () => {
  let emailInput, passwordInput;
  const { data, loading, refetch } = useQuery(AUTHED_USER);
  const [authUser] = useMutation(AUTH_USER);
  const [logOut] = useMutation(LOG_OUT);

  if (loading) return null;
  if (data?.authenticatedUser?.name) {
    return (
      <div css={styles}>
        {data.authenticatedUser.name}{" "}
        <button
          onClick={() => {
            logOut().then(() => refetch());
          }}
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div css={styles}>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          authUser({
            variables: {
              email: emailInput.value,
              password: passwordInput.value,
            },
          });
        }}
      >
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            ref={(node) => {
              emailInput = node;
            }}
          />
        </div>

        <div>
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            ref={(node) => {
              passwordInput = node;
            }}
            name="password"
            minLength={8}
            required
          />
        </div>

        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default Login;
