/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useMutation } from "@ts-gql/apollo";
import { gql } from "@ts-gql/tag";
import { colours } from "../lib/colours";
import { BattleInfo } from "../lib/fragments";

type BoardProps = BattleInfo & {
  isInteractable?: boolean;
};

const UPDATE_OBJECTIVE_SCORE = gql`
  mutation updateObjective($id: ID!, $score: Int!) {
    updateObjective(id: $id, data: { score: $score }) {
      id
      score
    }
  }
` as import("../../__generated__/ts-gql/updateObjective").type;

const UPDATE_CP = gql`
  mutation updateCP($id: ID!, $CP: Int!) {
    updateBattleInfo(id: $id, data: { CP: $CP }) {
      id
      CP
    }
  }
` as import("../../__generated__/ts-gql/updateCP").type;

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

const Board = ({
  primary,
  secondaries,
  isInteractable = false,
  army,
  CP,
  notes,
  id,
}: BoardProps) => {
  const [updateObjective] = useMutation(UPDATE_OBJECTIVE_SCORE);
  const [updateCP] = useMutation(UPDATE_CP);

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
          max={99}
          onChange={({ target }) =>
            updateCP({ variables: { id, CP: parseInt(target.value) } })
          }
        />
      </ul>
      <div
        css={{
          paddingBottom: 8,
          paddingTop: 8,
          borderTop: `1px solid ${colours.neutral300}`,
        }}
      >
        <span css={{ paddingRight: 4 }}>Current score:</span>
        <span>
          {primary.score +
            secondaries.reduce((acc, b) => {
              return acc + b.score;
            }, 0)}
        </span>
      </div>
      <div
        css={{
          borderTop: `1px solid ${colours.neutral300}`,
          padding: 12,
          borderRadius: 3,
        }}
      >
        <b>Pre-battle notes:</b>
        <p>{notes}</p>
      </div>
    </div>
  );
};

const Boards = ({ army1, army2, isInteractable }) => (
  <div css={{ display: "flex", justifyContent: "space-around" }}>
    <Board {...army1} isInteractable={isInteractable} />
    <Board {...army2} isInteractable={isInteractable} />
  </div>
);

export default Boards;
