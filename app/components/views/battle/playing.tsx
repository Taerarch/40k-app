/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useMutation } from "@ts-gql/apollo";
import { gql } from "@ts-gql/tag";

import { Button } from "../../design-system/Button";
import Boards from "../../Boards";
import { Textarea } from "../../design-system/TextArea";
import { useMemo, useState } from "react";

const END_BATTLE = gql`
  mutation endBattle($id: ID!) {
    updateBattle(id: $id, data: { status: completed }) {
      id
    }
  }
` as import("../../../../__generated__/ts-gql/endBattle").type;

const UPDATE_DESCRIPTION = gql`
  mutation updateBattleDescription($id: ID!, $description: String!) {
    updateBattle(id: $id, data: { description: $description }) {
      id
      description
    }
  }
` as import("../../../../__generated__/ts-gql/updateBattleDescription").type;

const debounce = (func, wait = 1000) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func(...args), wait;
    });
  };
};

const PlayerPlaying = ({ theirArmy, myArmy, battleId, description }) => {
  const [endBattle] = useMutation(END_BATTLE);
  const [description2, udpateDescription] = useState(description);

  const [updateDescriptionMutation] = useMutation(UPDATE_DESCRIPTION);

  const debounced = debounce((description3) =>
    updateDescriptionMutation({
      variables: { id: battleId, description: description3 },
    })
  );

  useMemo(() => debounced(description2), [description2]);

  return (
    <>
      <Boards army1={myArmy} army2={theirArmy} isInteractable />
      <div>
        <Textarea
          value={description2}
          onChange={({ target }) => udpateDescription(target.value)}
        />
      </div>
      <div css={{ display: "flex", justifyContent: "center", paddingTop: 24 }}>
        <Button onClick={() => endBattle({ variables: { id: battleId } })}>
          End Battle
        </Button>
      </div>
    </>
  );
};

export default PlayerPlaying;
