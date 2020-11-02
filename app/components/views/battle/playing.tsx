/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useMutation } from "@ts-gql/apollo";
import { gql } from "@ts-gql/tag";

import { Button } from "../../Button";
import Boards from "../../Boards";

const END_BATTLE = gql`
  mutation endBattle($id: ID!) {
    updateBattle(id: $id, data: { status: completed }) {
      id
    }
  }
` as import("../../../../__generated__/ts-gql/endBattle").type;

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

export default PlayerPlaying;
