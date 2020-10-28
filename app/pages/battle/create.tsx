/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useMutation, useQuery } from "@ts-gql/apollo";
import { gql } from "@ts-gql/tag";
import { useState } from "react";
import Select from "react-select";
import { useRouter } from "next/router";

const GET_ARMIES = gql`
  query getArmies {
    allArmies {
      id
      name
      faction
      owner {
        id
        name
      }
    }
  }
` as import("../../../__generated__/ts-gql/getArmies").type;

const CREATE_BATTLE = gql`
  mutation createABattle(
    $points: Int!
    $description: String!
    $mission: String
    $army1ID: ID!
    $army2ID: ID!
  ) {
    createBattle(
      data: {
        points: $points
        description: $description
        mission: $mission
        status: planning
        army1: {
          create: {
            army: { connect: { id: $army1ID } }
            primary: { create: { name: "Primary", score: 0 } }
            secondaries: {
              create: [
                { name: "", score: 0 }
                { name: "", score: 0 }
                { name: "", score: 0 }
              ]
            }
          }
        }
        army2: {
          create: {
            army: { connect: { id: $army1ID } }
            primary: { create: { name: "Primary", score: 0 } }
            secondaries: {
              create: [
                { name: "", score: 0 }
                { name: "", score: 0 }
                { name: "", score: 0 }
              ]
            }
          }
        }
      }
    ) {
      id
      army1 {
        army {
          name
        }
      }
      army2 {
        army {
          name
        }
      }
    }
  }
`;

const ArmySelect = ({ allArmies, onChange }) => (
  <Select
    options={allArmies.map(({ name, faction, owner }) => ({
      value: name,
      label: `${owner.name}: ${faction} (${name})`,
    }))}
    onChange={(item, { action }) =>
      action === "select-option" && onChange(item.value)
    }
  />
);

const Create = () => {
  // TODO: make this form accessible instead of these hacks
  const [army1, setArmy1] = useState();
  const [army2, setArmy2] = useState();
  const [points, setPoints] = useState(2000);
  const [mission, setMission] = useState("No Man's Land");
  const [description, setDescription] = useState("");
  const { push } = useRouter();

  const { loading, data: { allArmies } = {}, error } = useQuery(GET_ARMIES);
  const [createABattle, { data: { createBattle = {} } = {} }] = useMutation(
    CREATE_BATTLE,
    {
      onCompleted: (thing) => console.log(thing),
    }
  );

  if (createBattle?.id) {
    push(`/battle/${createBattle.id}`);
  }

  const createDisabled = !(
    army1 &&
    army2 &&
    points &&
    mission &&
    army1 !== army2
  );
  return (
    <div>
      {allArmies ? (
        <div>
          <h2>Select Army 1</h2>
          <ArmySelect allArmies={allArmies} onChange={setArmy1} />
          <h2>Select Army 2</h2>
          <ArmySelect allArmies={allArmies} onChange={setArmy2} />
          <div>
            <h2>Set Number of Points</h2>
            <input
              type="number"
              value={points}
              onChange={({ target }) => setPoints(parseInt(target.value))}
            />
          </div>
          <div>
            <h2>Name of the Mission</h2>
            <input
              type="text"
              value={mission}
              onChange={({ target }) => setMission(target.value)}
            />
          </div>
          <div>
            <h2>Describe the scenario (flavor stuff)</h2>
            <input
              type="text"
              value={description}
              onChange={({ target }) => setDescription(target.value)}
            />
          </div>
          {army1 && army1 === army2 && (
            <div>
              You've selected one army to fight against itself - you'll need to
              change one side
            </div>
          )}
          <div>
            <button
              disabled={createDisabled}
              onClick={() => {
                createABattle({
                  variables: {
                    army1ID: allArmies.find(({ name }) => name === army1).id,
                    army2ID: allArmies.find(({ name }) => name === army2).id,
                    points,
                    mission,
                    description,
                  },
                });
              }}
            >
              Create Mission
            </button>
          </div>
        </div>
      ) : (
        "no data"
      )}
    </div>
  );
};

export default Create;

// TODO: use getStaticProps here
// export async function getStaticProps() {
//   const { query } = initializeApollo();

//   const { data } = await query({
//     query: GET_ARMIES,
//   });

//   console.log(data);
//   return { props: {} };
// }
