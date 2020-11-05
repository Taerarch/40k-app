import { gql } from "@ts-gql/tag";

export const GET_AVAILABLE_SECONDARIES = gql`
  query getAvailableSecondaries($missionID: ID!) {
    allObjectiveOptions(where: { category_not: "missionSecondary" }) {
      id
      name
      category
      rules
    }
    Mission(where: { id: $missionID }) {
      id
      secondary {
        id
        name
        category
        rules
      }
    }
  }
` as import("../../__generated__/ts-gql/getAvailableSecondaries").type;