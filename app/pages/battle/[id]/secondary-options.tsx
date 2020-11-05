import { useRouter } from "next/router";
import { useQuery } from "@ts-gql/apollo";
import MD from "react-markdown";
import { GET_AVAILABLE_SECONDARIES } from "../../../lib/queries";
import useAvailableSecondaries from "../../../lib/use-available-secondaries";

const SecondaryOptions = () => {
  const {
    query: { id },
  } = useRouter();

  const { availableSecondaries, error } = useAvailableSecondaries(id);

  if (error)
    return <div>Some error occurred who knows what. Are you logged in?</div>;

  if (!availableSecondaries) {
    return <div>We are probably loading??</div>;
  }

  return (
    <div>
      {availableSecondaries.map(({ name, category, rules }) => (
        <div key={name}>
          <h3>
            {name} ({category})
          </h3>
          {rules ? (
            <MD children={rules} />
          ) : (
            <div>rules for this secondary not yet entered</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SecondaryOptions;
