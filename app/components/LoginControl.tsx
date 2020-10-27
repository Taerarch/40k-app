/** @jsx jsx */
import { jsx } from "@emotion/core";
import { gql, useMutation, useQuery } from "@apollo/client";

const AUTH_USER = gql`
  mutation signin($email: String, $password: String) {
    authenticate: authenticateUserWithPassword(
      email: $email
      password: $password
    ) {
      item {
        name
      }
    }
  }
`;

export const AUTHED_USER = gql`
  query getAuthedUser {
    authenticatedUser {
      id
      name
    }
  }
`;

const LOG_OUT = gql`
  mutation {
    unauthenticateUser {
      success
    }
  }
`;

const Login = () => {
  let emailInput, passwordInput;
  const { data: { authenticatedUser } = {}, refetch, loading } = useQuery(
    AUTHED_USER
  );
  const [authUser] = useMutation(AUTH_USER, {
    onCompleted: () => refetch(),
  });
  const [logOut] = useMutation(LOG_OUT, {
    onCompleted: () => refetch(),
  });

  if (loading) return null;
  if (authenticatedUser?.name) {
    return (
      <div>
        {authenticatedUser.name}{" "}
        <button
          onClick={() => {
            logOut();
          }}
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div>
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
            minLength="8"
            required
          />
        </div>

        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default Login;
