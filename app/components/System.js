import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import Planet from "./Planet";

const GET_SYSTEM = gql`
  query getSystems {
    allPlanets {
      name
      battlefields {
        gridReference
        controller {
          name
        }
      }
    }
  }
`;

const System = () => {
  const { loading, error, data } = useQuery(GET_SYSTEM);
  if (loading) return "loading...";
  return (
    <div display="flex">
      <Planet size={2} name="One" />
      <Planet size={4} name="Pox" />
      <Planet size={1} name="Articuno" />
    </div>
  );
};

export default System;
