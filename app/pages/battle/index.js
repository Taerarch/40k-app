/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";

const GET_ALL_ARMIES = `
query getAllArmies {
  allArmies {
    name
    id
    owner {
      name
      id
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

const ArmyDetails = ({ armies, name, updateData, data }) => (
  <div>
    <label for={`${name}-select`}>{name}</label>
    <select id={`${name}-select`}>
      <option key=""></option>
      {armies.map((army) => (
        <option
          key={army.name}
          value={army.name}
        >{`${army.name} (${army.owner.name})`}</option>
      ))}
    </select>
    <h3>Secondaries</h3>
    <div>
      <label for={`${name}-secondary1`}>Secondary 1:</label>
      <input
        id={`${name}-secondary1`}
        value={data[`${name}Secondary1`]}
        onChange={(e) => {
          let newData = { ...data };
          newData[`${name}Secondary1`] = e.target.value;

          updateData(newData);
        }}
      />
    </div>
    <div>
      <label for={`${name}-secondary2`}>Secondary 2:</label>
      <input id={`${name}-secondary2`} />
    </div>
    <div>
      <label for={`${name}-secondary3`}>Secondary 3:</label>
      <input id={`${name}-secondary3`} />
    </div>
  </div>
);

const BattleReport = () => {
  const [armies, updateArmies] = useState(null);
  const [auth, updateAuth] = useState(null);
  const [data, updateData] = useState({
    mission: "",
    army1: "",
    army2: "",
    army1Secondary1: "",
    army1Secondary2: "",
    army1Secondary3: "",
    army2Secondary1: "",
    army2Secondary2: "",
    army2Secondary3: "",
  });

  useEffect(() => {
    fetch("/admin/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: LOGIN_USER,
        variables: { identity: "novinyarts@gmail.com", secret: "password" },
      }),
    })
      .then((result) => result.json())
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
          query: GET_ALL_ARMIES,
        }),
      })
        .then((result) => result.json())
        .then(({ data }) => updateArmies(data.allArmies));
  }, [auth]);

  return armies ? (
    <form onSubmit={(e) => console.log(e.target.value) || e.preventDefault()}>
      <div>
        <label for="mission">Mission:</label>
        <input
          id="mission"
          value={data.mission}
          onChange={(e) => updateData({ ...data, mission: e.target.value })}
        />
      </div>
      <div css={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <ArmyDetails
          armies={armies}
          name="army1"
          updateData={updateData}
          data={data}
        />
        <ArmyDetails
          armies={armies}
          name="army2"
          updateData={updateData}
          data={data}
        />
      </div>
      <button>Submit Stuff</button>
    </form>
  ) : (
    "loading"
  );
};

export default BattleReport;
