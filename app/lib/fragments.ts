import { gql, FragmentData } from "@ts-gql/tag";

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
    secondaries(sortBy: id_ASC) {
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

export type BattleInfo = Readonly<FragmentData<typeof armyInfoFragment>>;
