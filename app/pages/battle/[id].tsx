/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useMutation, useQuery } from "@ts-gql/apollo";
import { gql, FragmentData } from "@ts-gql/tag";
import Select from "react-select";

import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { Button } from "../../components/Button";
// TODO refactor this code, and split this file out into more bite-size manageable chunks

const fragment = gql`
  fragment Army_info on BattleInfo {
    id
    CP
    notes
    primary {
      selection {
        id
        name
      }
      id
      score
    }
    secondaries {
      id
      selection {
        id
        name
        category
      }
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

const UPDATE_OBJECTIVE_SCORE = gql`
  mutation updateObjective($id: ID!, $score: Int!) {
    updateObjective(id: $id, data: { score: $score }) {
      id
      score
    }
  }
` as import("../../../__generated__/ts-gql/updateObjective").type;

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
const UPDATE_INFO = gql`
  mutation preBattleUpdateInfo($armyInfoID: ID!, $notes: String!) {
    updateBattleInfo(id: $armyInfoID, data: { notes: $notes }) {
      id
      notes
    }
  }
` as import("../../../__generated__/ts-gql/preBattleUpdateInfo").type;

const MAKE_BATTLE_ACTIVE = gql`
  mutation activateBattle($id: ID!) {
    updateBattle(id: $id, data: { status: inProgress }) {
      id
    }
  }
` as import("../../../__generated__/ts-gql/activateBattle").type;

const SpectatorMode = ({ status, army1, army2 }) => {
  if (status === "planning") {
    return <div>Spectator mode: "waiting for game to commence"</div>;
  } else if (status === "inProgress") {
    return <Boards army1={army1} army2={army2} isInteractable={false} />;
  } else if (status === "completed") {
    return <div>"completed scene"</div>;
  } else {
    return <div>"problems"</div>;
  }
};

const Imp = ({ name, score, isInteractable, onChange, max = 15 }) => (
  <li key={name} css={{ display: "flex", justifyContent: "space-between" }}>
    <span>{name}:</span>
    <span>
      {isInteractable ? (
        <input
          type="number"
          value={score}
          onChange={onChange}
          css={{ width: 40, textAlign: "center" }}
          min="0"
          max={max}
        />
      ) : (
        score
      )}
    </span>
  </li>
);

type BattleInfo = Readonly<FragmentData<typeof fragment>>;

type BoardProps = BattleInfo & {
  isInteractable?: boolean;
};

const Board = ({
  primary,
  secondaries,
  isInteractable = false,
  army,
  CP,
}: BoardProps) => {
  const [updateObjective] = useMutation(UPDATE_OBJECTIVE_SCORE);

  return (
    <div css={{ maxWidth: 200, display: "inline-block" }}>
      <h2>{army.owner.name}</h2>
      <ul css={{ padding: 0 }}>
        <Imp
          {...primary}
          name={primary.selection.name}
          max={45}
          onChange={({ target }) =>
            updateObjective({
              variables: { id: primary.id, score: parseInt(target.value) },
            })
          }
          isInteractable={isInteractable}
        />
        {secondaries.map((secondary) => (
          <Imp
            {...secondary}
            name={secondary.selection.name}
            key={secondary.selection.name}
            onChange={({ target }) =>
              updateObjective({
                variables: { id: secondary.id, score: parseInt(target.value) },
              })
            }
            isInteractable={isInteractable}
          />
        ))}
        <Imp
          isInteractable={isInteractable}
          name="CP"
          score={CP}
          onChange={() => {}}
        />
      </ul>
      Current total score:{" "}
      {primary.score +
        secondaries.reduce((acc, b) => {
          return acc + b.score;
        }, 0)}
    </div>
  );
};

type PlayerViewProps = typeof GET_BATTLE.___type.result.Battle & {
  userId: String;
  refetch: Function;
  startPolling: Function;
};

const GET_AVAILABLE_SECONDARIES = gql`
  query getAvailableSecondaries($missionID: ID!) {
    allObjectiveOptions(where: { category_not: "missionSecondary" }) {
      id
      name
      category
    }
    Mission(where: { id: $missionID }) {
      id
      secondary {
        id
        name
        category
      }
    }
  }
` as import("../../../__generated__/ts-gql/getAvailableSecondaries").type;

const UPDATE_AN_OBJECTIVE = gql`
  mutation updateAnObjective($objID: ID!, $rulesID: ID!) {
    updateObjective(
      id: $objID
      data: { selection: { connect: { id: $rulesID } } }
    ) {
      id
    }
  }
` as import("../../../__generated__/ts-gql/updateAnObjective").type;

const PickSecondary = ({
  availableSecondaries,
  secondaryID,
  num,
  selection,
}) => {
  const [updateSeconday] = useMutation(UPDATE_AN_OBJECTIVE);

  return (
    <>
      <h2>Pick Secondary {num + 1}</h2>
      <Select
        defaultValue={{
          value: selection.id,
          label: `${selection.name} (${selection.category})`,
        }}
        options={availableSecondaries}
        onChange={({ value }, { action }) =>
          action === "select-option" &&
          updateSeconday({
            variables: { objID: secondaryID, rulesID: value },
          }).then(() => console.log("updated", secondaryID, value))
        }
      />
    </>
  );
};

const PlayerPlanning = ({
  cantMoveFromBattle,
  army,
  id,
  refetch,
}: {
  cantMoveFromBattle: boolean;
  army: typeof fragment.___type.result;
  id: string;
  refetch: Function;
}) => {
  const { data } = useQuery(GET_AVAILABLE_SECONDARIES, {
    variables: { missionID: id },
  });

  const availableSecondaries = useMemo(
    () =>
      data?.allObjectiveOptions
        // TODO we should be able to make a better filter here so we don't need to filter out primaries
        .filter(({ category }) => category !== "primary")
        .concat(data?.Mission?.secondary)
        .map(({ name, category, id }) => ({
          value: id,
          label: `${name} (${category})`,
        })),
    [data?.Mission, data?.allObjectiveOptions]
  );

  const [preBattleUpdateInfo] = useMutation(UPDATE_INFO);
  const [activateBattle] = useMutation(MAKE_BATTLE_ACTIVE);
  // we assume if there is no army, that means that the user is not logged in
  // this is an accurate but inellegant handle
  if (!army) {
    return (
      <div>Game has not yet started, please wait a bit before spectating</div>
    );
  }

  const [notes, setNotes] = useState(army.notes || "");

  // TODO: validate your secondaries picks and warn for errors
  // Major errors are:
  //    Picking the same secondary twice
  //    Having two secondaries from the same category
  return (
    <>
      {army.secondaries.map(({ id, selection }, i) => (
        <PickSecondary
          key={id}
          num={i}
          secondaryID={id}
          selection={selection}
          availableSecondaries={availableSecondaries}
        />
      ))}
      <div>
        <h2>Pre-mission notes:</h2>
        <textarea
          value={notes}
          onChange={({ target }) => setNotes(target.value)}
        />
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: 8,
        }}
      >
        <Button
          onClick={() =>
            preBattleUpdateInfo({
              variables: {
                armyInfoID: army.id,
                notes,
              },
            }).then(() => refetch())
          }
        >
          Update Info
        </Button>
        <Button
          disabled={cantMoveFromBattle}
          onClick={() =>
            activateBattle({ variables: { id } }).then(() => refetch())
          }
        >
          Begin Battle
        </Button>
      </div>
    </>
  );
};

const END_BATTLE = gql`
  mutation endBattle($id: ID!) {
    updateBattle(id: $id, data: { status: completed }) {
      id
    }
  }
` as import("../../../__generated__/ts-gql/endBattle").type;

const Boards = ({ army1, army2, isInteractable }) => (
  <div css={{ display: "flex", justifyContent: "space-around" }}>
    <Board {...army1} isInteractable={isInteractable} />
    <Board {...army2} isInteractable={isInteractable} />
  </div>
);

const PlayerPlaying = ({ theirArmy, myArmy, battleId }) => {
  const [endBattle, { client }] = useMutation(END_BATTLE);

  return (
    <>
      <Boards army1={myArmy} army2={theirArmy} isInteractable />
      <div css={{ display: "flex", justifyContent: "center", paddingTop: 24 }}>
        <Button onClick={() => endBattle({ variables: { id: battleId } })}>
          End Battle
        </Button>
      </div>
    </>
  );
};

const sortArmies = (army1, army2, userId) => {
  let myArmy, theirArmy;

  if (army1.army.owner.id === userId) {
    myArmy = army1;
    theirArmy = army2;
  } else if (army2.army.owner.id === userId) {
    myArmy = army2;
    theirArmy = army1;
  }
  return { myArmy, theirArmy };
};

const PlayerView = ({
  army1,
  army2,
  status,
  userId,
  id,
  refetch,
  startPolling,
}: PlayerViewProps) => {
  const { myArmy, theirArmy } = sortArmies(army1, army2, userId);

  if (status === "planning") {
    const cantMoveFromBattle = !!(
      myArmy.secondaries.find(({ name }) => !name) ||
      theirArmy.secondaries.find(({ name }) => !name)
    );

    return (
      <PlayerPlanning
        cantMoveFromBattle={cantMoveFromBattle}
        army={myArmy}
        id={id}
        refetch={refetch}
      />
    );
  } else if (status === "inProgress") {
    startPolling(2000);

    return (
      <PlayerPlaying battleId={id} myArmy={myArmy} theirArmy={theirArmy} />
    );
  } else if (status === "completed") {
    return (
      <div>
        <p>This battle is over. Here is how it went down:</p>
        <Boards army1={myArmy} army2={theirArmy} isInteractable={false} />
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

// TODO: highlight which you are from this
const Header = ({
  army1,
  army2,
  userId,
}: {
  userId?: String;
  army1: BattleInfo;
  army2: BattleInfo;
}) => {
  let { myArmy, theirArmy } = sortArmies(army1, army2, userId);
  if (myArmy) {
    return (
      <h1 css={{ textAlign: "center" }}>
        {myArmy.army.name} vs. {theirArmy.army.name}
      </h1>
    );
  }
  return (
    <h1 css={{ textAlign: "center" }}>
      {army1.army.name} vs. {army2.army.name}
    </h1>
  );
};

const BattleView = () => {
  const {
    query: { id },
  } = useRouter();
  const { error, refetch, data: battleData, startPolling } = useQuery(
    GET_BATTLE,
    {
      // @ts-ignore
      variables: { id },
    }
  );

  const { data: userData } = useQuery(AUTHED_USER);

  if (error) {
    return (
      <div>
        Something went wrong fetching data - maybe you are logged out? Here is
        the full error: {JSON.stringify(error)}
      </div>
    );
  }

  if (!battleData || !userData) {
    return <div>Fetching info for the battle</div>;
  }

  const { Battle } = battleData;
  const { authenticatedUser } = userData;

  const { army1, army2, ...rest } = Battle;

  if (sortArmies(army1, army2, authenticatedUser.id).myArmy) {
    return (
      <>
        <Header army1={army1} army2={army2} userId={authenticatedUser.id} />
        <PlayerView
          {...Battle}
          userId={authenticatedUser.id}
          refetch={refetch}
          startPolling={startPolling}
        />
      </>
    );
  } else {
    return (
      <>
        <Header army1={army1} army2={army2} />
        <SpectatorMode army1={army1} army2={army2} {...rest} />
      </>
    );
  }
};

export default BattleView;
