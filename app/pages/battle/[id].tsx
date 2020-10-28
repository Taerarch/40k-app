/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useMutation, useQuery } from "@ts-gql/apollo";
import { gql, FragmentData } from "@ts-gql/tag";

import { useRouter } from "next/router";
import { useState } from "react";

const fragment = gql`
  fragment Army_info on BattleInfo {
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
` as import("../../../__generated__/ts-gql/Army_info").type;

const GET_BATTLE = gql`
  query getBattle($id: ID!) {
    Battle(where: { id: $id }) {
      status
      id
      army1 {
        ...Army_info
      }
      army2 {
        ...Army_info
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
    $s1: String!
    $s1ID: ID!
    $s2: String!
    $s2ID: ID!
    $s3: String!
    $s3ID: ID!
  ) {
    updateObjectives(
      data: [
        { id: $s1ID, data: { name: $s1 } }
        { id: $s2ID, data: { name: $s2 } }
        { id: $s3ID, data: { name: $s3 } }
      ]
    ) {
      id
    }
  }
` as import("../../../__generated__/ts-gql/udpateSecondaries").type;

const MAKE_BATTLE_ACTIVE = gql`
  mutation activateBattle($id: ID!) {
    updateBattle(id: $id, data: { status: inProgress }) {
      id
    }
  }
` as import("../../../__generated__/ts-gql/activateBattle").type;

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

type BoardProps = Readonly<FragmentData<typeof fragment>> & {
  isInteractable?: boolean;
};

const Board = ({
  primary,
  secondaries,
  isInteractable = false,
  army,
}: BoardProps) => {
  return (
    <div>
      <h2>{army.owner.name}</h2>
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

type PlayerViewProps = typeof GET_BATTLE.___type.result.Battle & {
  userId: String;
};

const PlayerView = ({ army1, army2, status, userId }: PlayerViewProps) => {
  const myArmy = army1.army.owner.id === userId ? army1 : army2;
  const theirArmy = army1.army.owner.id !== userId ? army1 : army2;
  const [secondaries, setSecondaries] = useState(myArmy.secondaries);

  const [udpateSecondaries] = useMutation(UPDATE_SECONDARIES);
  const [activateBattle] = useMutation(MAKE_BATTLE_ACTIVE);

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
                s1: secondaries[0].name,
                s2: secondaries[1].name,
                s3: secondaries[2].name,
                s1ID: secondaries[0].id,
                s2ID: secondaries[1].id,
                s3ID: secondaries[2].id,
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
  const { error, refetch, data: battleData } = useQuery(GET_BATTLE, {
    variables: { id },
  });

  const { data: userData } = useQuery(AUTHED_USER);

  if (!battleData || !userData) {
    return <div>Fetching info for the battle</div>;
  }

  const { Battle } = battleData;
  const { authenticatedUser } = userData;

  const { army1, army2, ...rest } = Battle;

  if (error) {
    // TODO this will swallow random errors and is therefore bad
    // push("/battle/create");
    return null;
  } else if (
    authenticatedUser.id === army1.army.owner.id ||
    authenticatedUser.id === army2.army.owner.id
  ) {
    return (
      <>
        <Header army1={army1} army2={army2} />
        <PlayerView {...Battle} userId={authenticatedUser.id} />
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
