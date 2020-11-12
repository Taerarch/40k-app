/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useQuery } from "@ts-gql/apollo";
import { gql } from "@ts-gql/tag";
import UnhandledError from "../../components/UnhandledError";
// TODO: Add color picker to use here
import SketchPicker from "react-color/lib/Sketch";
import { AUTHED_USER } from "../../lib/queries";

const getUserInfo = gql`
  query getUserInfo($id: ID!) {
    User(where: { id: $id }) {
      id
      armies {
        id
        name
        faction
        primaryColor
        secondaryColor
        description
        highlightColor
        armyRules
      }
    }
  }
` as import("../../../__generated__/ts-gql/getUserInfo").type;

const UserView = ({ id }) => {
  const { data, error } = useQuery(getUserInfo, { variables: { id } });
  if (error) return <UnhandledError error={error} />;

  if (!data) return <div>"loading..."</div>;

  return (
    <div>
      <h2>Armies</h2>
      {data.User.armies.map(
        ({
          name,
          faction,
          description,
          armyRules,
          primaryColor,
          secondaryColor,
          highlightColor,
        }) => (
          <ul key={name}>
            <li>
              <b>name:</b> {name}
            </li>
            <li>
              <b>faction:</b> {faction}
            </li>
            <li>
              <b>description:</b> {description}
            </li>
            <li>
              <b>armyRules:</b> {armyRules}
            </li>
            <li>
              <b>primaryColor:</b>{" "}
              <div
                css={{
                  height: 16,
                  width: 16,
                  backgroundColor: primaryColor,
                  display: "inline-block",
                }}
              />
              <span css={{ paddingLeft: 8 }}>{primaryColor}</span>
            </li>
            <li>
              <b>secondaryColor:</b>{" "}
              <div
                css={{
                  height: 16,
                  width: 16,
                  backgroundColor: secondaryColor,
                  display: "inline-block",
                }}
              />
              <span css={{ paddingLeft: 8 }}>{secondaryColor}</span>
            </li>
            <li>
              <b>highlightColor:</b>{" "}
              <div
                css={{
                  height: 16,
                  width: 16,
                  backgroundColor: highlightColor,
                  display: "inline-block",
                }}
              />
              <span css={{ paddingLeft: 8 }}>{highlightColor}</span>
            </li>
          </ul>
        )
      )}
    </div>
  );
};

const User = () => {
  const { data, error } = useQuery(AUTHED_USER);

  if (error) throw new Error(JSON.stringify(error));

  if (!data) return null;

  if (!data.authenticatedUser) {
    return <div>Please log in to view this page</div>;
  }

  return <UserView id={data.authenticatedUser.id} />;
};

export default User;
