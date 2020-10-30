/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useMutation, useQuery } from "@ts-gql/apollo";
import { gql } from "@ts-gql/tag";
import { useMemo, useState } from "react";
import Select from "react-select";
import { useRouter } from "next/router";
import { missionTypes } from "../../../constants";

const missionTypesArray = Object.entries(missionTypes)
  .map(([key, rest]) => ({
    key,
    ...rest,
  }))
  .sort((a, b) => (a.maxPoints < b.maxPoints ? 1 : 0));

const getMissionSize = (points): typeof missionTypesArray[0] => {
  let bestMission;

  for (let mission of missionTypesArray) {
    if (mission.maxPoints >= points) bestMission = mission;
  }

  if (!bestMission) {
    bestMission = missionTypesArray.find(({ key }) => key === "onslaught");
  }
  return bestMission;
};

const CREATE_BATTLE = gql`
  mutation createABattle(
    $points: Int!
    $description: String!
    $missionID: ID!
    $army1ID: ID!
    $army2ID: ID!
    $startingCP: Int!
  ) {
    createBattle(
      data: {
        points: $points
        description: $description
        mission: { connect: { id: $missionID } }
        status: planning
        army1: {
          create: {
            army: { connect: { id: $army1ID } }
            primary: { create: { name: "Primary", score: 0 } }
            CP: $startingCP
            secondaries: { create: [{ score: 0 }, { score: 0 }, { score: 0 }] }
          }
        }
        army2: {
          create: {
            army: { connect: { id: $army2ID } }
            primary: { create: { name: "Primary", score: 0 } }
            CP: $startingCP
            secondaries: { create: [{ score: 0 }, { score: 0 }, { score: 0 }] }
          }
        }
      }
    ) {
      id
    }
  }
` as import("../../../__generated__/ts-gql/createABattle").type;

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

const GET_INITIAL_DATA = gql`
  query getCreateInitialData {
    allMissions {
      id
      name
      forceSize
    }
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
` as import("../../../__generated__/ts-gql/getCreateInitialData").type;

const Create = () => {
  const { data } = useQuery(GET_INITIAL_DATA);

  // TODO: make this form accessible instead of these hacks
  const [army1, setArmy1] = useState();
  const [army2, setArmy2] = useState();
  const [points, setPoints] = useState(2000);
  const [missionID, setMissionID] = useState();
  const [description, setDescription] = useState("");
  const { push } = useRouter();

  let missionSize = useMemo(() => getMissionSize(points), [points]);

  const [createABattle, { data: createData }] = useMutation(CREATE_BATTLE);

  const missions = useMemo(
    () =>
      data?.allMissions
        ?.filter(({ forceSize }) => forceSize === missionSize.key, [
          missionSize.key,
        ])
        .map(({ name, id }) => ({
          value: id,
          label: name,
        })),
    [missionSize.key, data?.allMissions]
  );

  if (!data) return "loading";
  const { allArmies } = data;

  if (createData) {
    push(`/battle/${createData.createBattle.id}`);
  }

  const createDisabled = !(
    army1 &&
    army2 &&
    points &&
    missionID &&
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
            <Select
              options={missions}
              onChange={(item, { action }) =>
                action === "select-option" && setMissionID(item.value)
              }
            />
          </div>
          <div>
            <h2>Describe the scenario (flavor stuff)</h2>
            <textarea
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
                    missionID,
                    description,
                    startingCP: missionSize.startingCP,
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
