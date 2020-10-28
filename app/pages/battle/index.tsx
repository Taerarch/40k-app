/** @jsx jsx */

import { jsx } from "@emotion/core";
import { useQuery } from "@ts-gql/apollo";
import { gql } from "@ts-gql/tag";
import Link from "next/link";

const GET_BATTLES = gql`
  query getAllBattles {
    allBattles {
      id
      status
      army1 {
        id
        army {
          id
          faction
          name
          owner {
            id
            name
          }
        }
      }
      army2 {
        id
        army {
          id
          faction
          name
          owner {
            id
            name
          }
        }
      }
    }
  }
` as import("../../../__generated__/ts-gql/getAllBattles").type;

const BattleList = () => {
  const { data } = useQuery(GET_BATTLES);

  const allBattles = data?.allBattles || [];
  const sortedBattles = [...allBattles].sort(
    // sort first to put in progress at the top
    (a, b) => (b.status === "inProgress" && a.status !== "inProgress" ? 1 : 0)
  );
  // show a table of relevant info for each battle
  return (
    <div>
      <ul>
        {sortedBattles.map(({ army1, army2, id, status }) => (
          <li key={id}>
            <Link
              href={{
                pathname: "/battle/[id]",
                query: { id },
              }}
            >
              <a>
                {army1?.army?.owner?.name || "???"} v{" "}
                {army2?.army?.owner?.name || "???"}
              </a>
            </Link>{" "}
            - ({status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BattleList;
