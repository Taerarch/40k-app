import { useState, useEffect } from "react";
import gql from "graphql-tag";

const GET_ALL_USERS = `
  query GetUsers {
    allUsers {
      name
      armies {
        name
      }
    }
  }
`;

const LOGIN_USER = `
mutation signin($identity: String, $secret: String) {
    authenticate: authenticateUserWithPassword(email: $identity, password: $secret) {
      item {
        id
      }
    }
  }
`;

const BattleReport = () => {
  const [data, updateData] = useState(null);
  const [auth, updateAuth] = useState(null);

  useEffect(() => {
    fetch("/admin/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: LOGIN_USER,
      }),
    })
      .then((result) => result.json())
      .then((r) => console.log(r) || r)
      .then((r) => updateAuth(r));
  }, []);

  useEffect(() => {
    auth &&
      fetch("/admin/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: GET_ALL_USERS,
        }),
      })
        .then((result) => result.json())
        .then((r) => updateData(r));
  }, [auth]);

  return data ? "loaded" : "loading";
};

export default BattleReport;
