import { useQuery } from "@ts-gql/apollo";
import { useMemo } from "react";
import { GET_AVAILABLE_SECONDARIES } from "./queries";

const useAvailableSecondaries = (missionID: string) => {
  const { data, error } = useQuery(GET_AVAILABLE_SECONDARIES, {
    variables: { missionID },
  });

  const availableSecondaries = useMemo(
    () =>
      data?.allObjectiveOptions
        // TODO we should be able to make a better filter here so we don't need to filter out primaries
        .filter(({ category }) => category !== "primary")
        .concat(data?.Mission?.secondary),
    [data?.Mission, data?.allObjectiveOptions]
  );

  return { error, availableSecondaries };
};

export default useAvailableSecondaries;
