/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useMutation } from "@ts-gql/apollo";
import { gql, FragmentData } from "@ts-gql/tag";
import { armyInfoFragment } from "../lib/fragments";

type BattleInfo = Readonly<FragmentData<typeof armyInfoFragment>>;

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

const Boards = ({ army1, army2, isInteractable }) => (
  <div css={{ display: "flex", justifyContent: "space-around" }}>
    <Board {...army1} isInteractable={isInteractable} />
    <Board {...army2} isInteractable={isInteractable} />
  </div>
);

export default Boards;
