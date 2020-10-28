/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useMutation, useQuery } from "@ts-gql/apollo";
import { gql } from "@ts-gql/tag";

import { useRouter } from "next/router";
import { useState } from "react";

const reshapeArmyBattleInfo = (battlefieldInfo) => {
  return {
    ...battlefieldInfo,
    name: `${battlefieldInfo.army.owner.name}'s ${battlefieldInfo.army.faction} (${battlefieldInfo.army.name})`,
    primary: {
      name: "Primary",
      score: battlefieldInfo.primaryScore,
    },
    secondaries: [
      {
        name: battlefieldInfo.secondary1,
        score: battlefieldInfo.secondary1Score,
      },
      {
        name: battlefieldInfo.secondary2,
        score: battlefieldInfo.secondary2Score,
      },
      {
        name: battlefieldInfo.secondary3,
        score: battlefieldInfo.secondary3Score,
      },
    ],
  };
};

const GET_BATTLE = gql`
  query getBattle($id: ID!) {
    Battle(where: { id: $id }) {
      status
      id
      army1 {
        id
        primary {
          id
          name
          score
        }
        secondaries {
          id
          name
          score
        }
        army {
          id
          name
          faction
          owner {
            id
            name
          }
        }
      }
      army2 {
        id
        primary {
          id
          name
          score
        }
        secondaries {
          id
          name
          score
        }
        army {
          id
          name
          faction
          owner {
            id
            name
          }
        }
      }
    }
  }
` as import("../../../__generated__/ts-gql/getBattle").type;

const AUTHED_USER = gql`
  query getAuthedUser {
    authenticatedUser {
      id
    }
  }
` as import("../../../__generated__/ts-gql/getAuthedUser").type;
const UPDATE_SECONDARIES = gql`
  mutation udpateSecondaries(
    $id: ID!
    $secondary1: String!
    $secondary2: String!
    $secondary3: String!
  ) {
    # updateObjectives {
      
    # }
  }
`;

const MAKE_BATTLE_ACTIVE = gql`
  mutation activateBattle($id: ID!) {
    updateBattle(id: $id, data: { status: inProgress }) {
      id
    }
  }
`;
const SpectatorMode = ({ status, army1, army2 }) => {
  if (status === "planning") {
    return <div>"waiting for game to commence"</div>;
  } else if (status === "inProgress") {
    return (
      <>
        <Board {...army1} isInteractable={false} />
        <Board {...army2} isInteractable={false} />
      </>
    );
  } else if (status === "completed") {
    return <div>"completed scene"</div>;
  } else {
    return <div>"problems"</div>;
  }
};

const Imp = ({ name, score, isInteractable, onChange }) => (
  <li key={name}>
    {name}:{" "}
    {isInteractable ? <input value={score} onChange={onChange} /> : score}
  </li>
);

const Board = ({
  name,
  primary,
  secondaries,
  isInteractable = false,
  army,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <Imp {...primary} onChange={() => {}} isInteractable={isInteractable} />
        {secondaries.map((secondary) => (
          <Imp
            {...secondary}
            key={secondary.name}
            onChange={() => {}}
            isInteractable={isInteractable}
          />
        ))}
        <li>
          CP: <input value={0} onChange={() => {}} />
        </li>
      </ul>
      Current total score:{" "}
      {primary.score +
        secondaries.reduce((acc, b) => {
          return acc + b.score;
        }, 0)}
    </div>
  );
};

const PickSecondary = ({ num, onChange, name }) => (
  <>
    <h2>Pick Secondary {num + 1}</h2>
    <input type="text" value={name || ""} onChange={onChange} />
  </>
);

const PlayerView = ({ myArmy, theirArmy, status, refetch, id }) => {
  const [secondaries, setSecondaries] = useState(myArmy.secondaries);

  const [udpateSecondaries] = useMutation(UPDATE_SECONDARIES);
  const [activateBattle, { error }] = useMutation(MAKE_BATTLE_ACTIVE, {
    onCompleted: () => refetch(),
  });

  if (status === "planning") {
    const cantMoveFromBattle =
      myArmy.secondaries.find(({ name }) => !name) ||
      theirArmy.secondaries.find(({ name }) => !name);

    return (
      <>
        {secondaries.map(({ name }, i) => (
          <PickSecondary
            key={i}
            name={name}
            num={i}
            onChange={({ target }) =>
              setSecondaries(
                secondaries.map((s, i2) =>
                  i2 !== i ? s : { ...s, name: target.value }
                )
              )
            }
          />
        ))}
        <button
          onClick={() =>
            udpateSecondaries({
              variables: {
                id: myArmy.id,
                secondary1: secondaries[0].name,
                secondary2: secondaries[1].name,
                secondary3: secondaries[2].name,
              },
            })
          }
        >
          Finalise secondaries
        </button>
        <button
          disabled={!cantMoveFromBattle}
          onClick={() => activateBattle({ variables: { id } })}
        >
          Begin Battle
        </button>
      </>
    );
  } else if (status === "inProgress") {
    return (
      <>
        <Board {...myArmy} />
        <Board {...theirArmy} />
        <button onClick={() => activateBattle({ variables: { id } })}>
          End Battle
        </button>
      </>
    );
  } else if (status === "completed") {
    return (
      <div>
        <p>This battle is over. Here is how it went down:</p>
        <Board {...myArmy} isInteractable={false} />
        <Board {...theirArmy} isInteractable={false} />
      </div>
    );
  } else {
    return (
      <div>
        An unexpected error occurred. Try refreshing? Or contact your nearest
        code manager
      </div>
    );
  }
};

const Header = ({ army1, army2 }) => (
  <h1>
    {army1.name} vs. {army2.name}
  </h1>
);

const BattleView = () => {
  const {
    query: { id },
  } = useRouter();
  const {
    loading: armyDataLoading,
    error,
    refetch,
    data: { Battle } = {},
  } = useQuery(GET_BATTLE, {
    variables: { id },
  });

  const {
    loading: loggedInUserLoading,
    data: { authenticatedUser } = {},
  } = useQuery(AUTHED_USER);

  if (armyDataLoading && loggedInUserLoading) {
    return <div>Fetching info for the battle</div>;
  }

  if (!authenticatedUser || !Battle) {
    return <div>Please Log in to see the battle</div>;
  }

  const { armyBattleInfo1, armyBattleInfo2, ...rest } = Battle;
  const army1 = reshapeArmyBattleInfo(armyBattleInfo1);
  const army2 = reshapeArmyBattleInfo(armyBattleInfo2);

  if (error) {
    // TODO this will swallow random errors and is therefore bad
    // push("/battle/create");
    return null;
  } else if (authenticatedUser.id === army1?.army?.owner?.id) {
    return (
      <>
        <Header army1={army1} army2={army2} />
        <PlayerView myArmy={army1} theirArmy={army2} {...rest} />
      </>
    );
  } else if (authenticatedUser.id === army2?.army?.owner?.id) {
    return (
      <>
        <Header army1={army2} army2={army1} />
        <PlayerView myArmy={army2} theirArmy={army1} {...rest} />{" "}
      </>
    );
  } else {
    return (
      <>
        <Header army1={army1} army2={army2} />
        <SpectatorMode army1={army1} army2={army2} {...rest} />{" "}
      </>
    );
  }
};

export default BattleView;
