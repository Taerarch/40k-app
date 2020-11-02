/** @jsx jsx */
import { jsx } from "@emotion/core";
import Boards from "../../Boards";

const SpectatorMode = ({ status, army1, army2 }) => {
  if (status === "planning") {
    return (
      <div>
        Spectator mode: "waiting for game to commence" - players are currently
        picking their secondaries
      </div>
    );
  } else if (status === "inProgress") {
    return <Boards army1={army1} army2={army2} isInteractable={false} />;
  } else {
    return <div>"problems"</div>;
  }
};

export default SpectatorMode;
