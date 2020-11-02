import Boards from "../../Boards";

const PostBattle = ({ army1, army2 }) => (
  <div>
    <p>This battle is over. Here is how it went down:</p>
    <Boards army1={army1} army2={army2} isInteractable={false} />
  </div>
);

export default PostBattle;
