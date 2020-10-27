/** @jsx jsx */
import { jsx } from "@emotion/core";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const GET_BATTLE = gql`
  query getBattle($id: ID!) {
    Battle(where: { id: $id }) {
      status
      id
      armyBattleInfo1 {
        id
        secondary1
        secondary2
        secondary3
        secondary1Score
        secondary2Score
        secondary3Score
        primaryScore
        army {
          name
          faction
          owner {
            id
            name
          }
        }
      }
      armyBattleInfo2 {
        id
        secondary1
        secondary2
        secondary3
        secondary1Score
        secondary2Score
        secondary3Score
        primaryScore
        army {
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
`;

const AUTHED_USER = gql`
  query getAuthedUser {
    authenticatedUser {
      id
    }
  }
`;
const UPDATE_SECONDARIES = gql`
  mutation udpateSecondaries(
    $id: ID!
    $secondary1: String!
    $secondary2: String!
    $secondary3: String!
  ) {
    updateArmyBattleInfo(
      id: $id
      data: {
        secondary1: $secondary1
        secondary2: $secondary2
        secondary3: $secondary3
      }
    ) {
      id
      secondary1
      secondary2
      secondary3
    }
  }
`;

const MAKE_BATTLE_ACTIVE = gql`
  mutation activateBattle($id: ID!) {
    updateBattle(id: $id, data: { status: inProgress }) {
      id
    }
  }
`;
const SpectatorMode = ({ status, armyBattleInfo1, armyBattleInfo2 }) => {
  if (status === "planning") {
    return "waiting for game to commence";
  } else if (status === "inProgress") {
    return (
      <>
        <Board {...armyBattleInfo1} />
        <Board {...armyBattleInfo2} />
      </>
    );
  } else if (status === "completed") {
    return "completed scene";
  } else {
    return "problems";
  }
};

const Board = ({
  name,
  secondary1,
  secondary2,
  secondary3,
  secondary3Score,
  secondary2Score,
  secondary1Score,
  primaryScore,
  isInteractable = false,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>
          Primary score: <input value={primaryScore} onChange={() => {}} />
        </li>
        <li>
          {secondary1}: <input value={secondary1Score} onChange={() => {}} />
        </li>
        <li>
          {secondary2}: <input value={secondary2Score} onChange={() => {}} />
        </li>
        <li>
          {secondary3}: <input value={secondary3Score} onChange={() => {}} />
        </li>
        <li>
          CP: <input value={0} onChange={() => {}} />
        </li>
      </ul>
      Current total score:{" "}
      {primaryScore + secondary1Score + secondary2Score + secondary3Score}
    </div>
  );
};

const PlayerView = ({ myBattleInfo, theirBattleInfo, status, refetch, id }) => {
  const [secondary1, setSecondary1] = useState(myBattleInfo.secondary1 || "");
  const [secondary2, setSecondary2] = useState(myBattleInfo.secondary2 || "");
  const [secondary3, setSecondary3] = useState(myBattleInfo.secondary3 || "");

  const [udpateSecondaries] = useMutation(UPDATE_SECONDARIES);
  const [activateBattle, { error }] = useMutation(MAKE_BATTLE_ACTIVE, {
    onCompleted: () => refetch(),
  });

  if (status === "planning") {
    const cantMoveFromBattle =
      myBattleInfo.secondary1 &&
      myBattleInfo.secondary2 &&
      myBattleInfo.secondary3 &&
      theirBattleInfo.secondary1 &&
      theirBattleInfo.secondary2 &&
      theirBattleInfo.secondary3;

    return (
      <>
        <h2>Pick Secondary 1</h2>
        <input
          type="text"
          value={secondary1}
          onChange={({ target }) => setSecondary1(target.value)}
        />
        <h2>Pick Secondary 2</h2>
        <input
          type="text"
          value={secondary2}
          onChange={({ target }) => setSecondary2(target.value)}
        />
        <h2>Pick Secondary 3</h2>
        <input
          type="text"
          value={secondary3}
          onChange={({ target }) => setSecondary3(target.value)}
        />
        <button
          onClick={() =>
            udpateSecondaries({
              variables: {
                id: myBattleInfo.id,
                secondary1,
                secondary2,
                secondary3,
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
          Begin Battle {id}
        </button>
      </>
    );
  } else if (status === "inProgress") {
    return (
      <>
        <Board
          {...myBattleInfo}
          name={`${myBattleInfo.army.owner.name}: ${myBattleInfo.army.faction} (${myBattleInfo.army.name})`}
        />
        <Board
          {...theirBattleInfo}
          name={`${theirBattleInfo.army.owner.name}: ${theirBattleInfo.army.faction} (${theirBattleInfo.army.name})`}
        />
      </>
    );
  } else if (status === "completed") {
    return "completed scene";
  } else {
    return "problems";
  }
};

const BattleView = () => {
  const {
    push,
    query: { id },
  } = useRouter();
  const {
    loading: armyDataLoading,
    error,
    refetch,
    data: { Battle = {} } = {},
  } = useQuery(GET_BATTLE, {
    variables: { id },
  });

  const { armyBattleInfo1 = {}, armyBattleInfo2 = {}, ...rest } = Battle;

  const {
    loading: loggedInUserLoading,
    data: { authenticatedUser } = {},
  } = useQuery(AUTHED_USER);

  if (armyDataLoading && loggedInUserLoading) {
    return <div>Fetching info for the battle</div>;
  } else if (error) {
    // TODO this will swallow random errors and is therefore bad
    // push("/battle/create");
    return null;
  } else if (authenticatedUser.id === armyBattleInfo1?.army?.owner?.id) {
    return (
      <PlayerView
        myBattleInfo={armyBattleInfo1}
        theirBattleInfo={armyBattleInfo2}
        {...rest}
        refetch={refetch}
      />
    );
  } else if (authenticatedUser.id === armyBattleInfo2?.army?.owner?.id) {
    return (
      <PlayerView
        myBattleInfo={armyBattleInfo2}
        theirBattleInfo={armyBattleInfo1}
        {...rest}
      />
    );
  } else {
    return (
      <SpectatorMode
        armyBattleInfo1={armyBattleInfo1}
        armyBattleInfo2={armyBattleInfo2}
        {...rest}
      />
    );
  }
};

export default BattleView;
