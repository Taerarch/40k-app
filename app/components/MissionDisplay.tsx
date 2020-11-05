/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useQuery } from "@ts-gql/apollo";
import { gql } from "@ts-gql/tag";
import { useState } from "react";
import MD from "react-markdown";
import { colours } from "../lib/colours";

const MISSION_DISPLAY = gql`
  query missionDisplay($id: ID!) {
    Mission(where: { id: $id }) {
      id
      name
      page
      briefing
      rules
      primary {
        id
        name
        rules
      }
      secondary {
        id
        name
        rules
      }
    }
  }
` as import("../../__generated__/ts-gql/missionDisplay").type;

const MissionDisplay = ({
  id,
  defaultExpanded = false,
}: {
  id: string;
  defaultExpanded?: boolean;
}) => {
  const [expanded, changeExpansion] = useState(defaultExpanded);
  const { data } = useQuery(MISSION_DISPLAY, { variables: { id } });

  if (!data) return null;

  const { name, briefing, rules, primary } = data.Mission;

  return (
    <>
      <div css={{ paddingTop: 8 }} />
      <div
        css={{
          border: `1px solid ${colours.red200}`,
          borderRadius: 3,
          padding: 16,
        }}
      >
        <h3 css={{ margin: 0 }}>
          Mission: <span css={{ color: colours.red700 }}>{name}</span>
        </h3>
        <i>
          <MD children={briefing} />
        </i>
        <button
          onClick={() => {
            changeExpansion(!expanded);
          }}
        >
          {expanded ? "show less" : "show more"}
        </button>
        {rules && expanded && (
          <div>
            <h4>Rules:</h4>
            <MD children={rules} />
          </div>
        )}
        {expanded && (
          <div>
            <h4>Primary: {primary.name}</h4>
            {primary.rules && <MD children={primary.rules} />}
          </div>
        )}
      </div>
    </>
  );
};

export default MissionDisplay;
