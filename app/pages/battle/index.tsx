/** @jsx jsx */
import { gql, useQuery } from "@apollo/client";
import { jsx } from "@emotion/core";
import Link from "next/link";

const GET_BATTLES = gql`
  query getAllBattles {
    allBattles {
      id
      status
      armyBattleInfo1 {
        army {
          faction
          name
          owner {
            name
          }
        }
      }
      armyBattleInfo2 {
        army {
          faction
          name
          owner {
            name
          }
        }
      }
    }
  }
`;

const BattleList = () => {
  const { data } = useQuery(GET_BATTLES);

  const allBattles = data?.allBattles || [];
  const sortedBattles = [...allBattles].sort(
    // sort first to put in progress at the top
    (a, b) => (b.stats === "inProgress" && a.status !== "inProgress" ? 1 : 0)
  );
  // show a table of relevant info for each battle
  return (
    <div>
      <ul>
        {sortedBattles.map(
          ({ armyBattleInfo1, armyBattleInfo2, id, status }) => (
            <li key={id}>
              <Link
                href={{
                  pathname: "/battle/[id]",
                  query: { id },
                }}
              >
                <a>
                  {armyBattleInfo1?.army?.owner?.name || "???"} v{" "}
                  {armyBattleInfo2?.army?.owner?.name || "???"}
                </a>
              </Link>{" "}
              - ({status})
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default BattleList;
