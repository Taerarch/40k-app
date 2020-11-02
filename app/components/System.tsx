import { useQuery } from "@ts-gql/apollo";
import { gql } from "@ts-gql/tag";
import Planet from "./Planet";

const GET_SYSTEM = gql`
  query getSystems {
    allPlanets {
      id
      name
      battlefields {
        id
        gridReference
        controller {
          id
          name
        }
      }
    }
  }
` as import("../../__generated__/ts-gql/getSystems").type;

const System = () => {
  const { loading, error, data } = useQuery(GET_SYSTEM);
  if (loading) return <div>"loading..."</div>;
  return (
    <div css={{ display: "flex" }}>
      <Planet size={2} name="One" />
      <Planet size={4} name="Pox" />
      <Planet size={1} name="Articuno" />
    </div>
  );
};

export default System;
