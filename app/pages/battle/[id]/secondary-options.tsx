import { useRouter } from "next/router";
import MD from "react-markdown";
import useAvailableSecondaries from "../../../lib/use-available-secondaries";

const SecondaryOptions = () => {
  const {
    query: { id },
  } = useRouter();

  let betterID = Array.isArray(id) ? id[0] : id;

  const { availableSecondaries, error } = useAvailableSecondaries(betterID);

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
