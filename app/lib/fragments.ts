import { gql } from "@ts-gql/tag";

export const armyInfoFragment = gql`
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
` as import("../../__generated__/ts-gql/Army_info").type;
