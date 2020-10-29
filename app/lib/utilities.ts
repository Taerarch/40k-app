export const getScore = ({ primary, secondaries }) =>
  secondaries.reduce((acc, { score }) => {
    return acc + score;
  }, 0) + primary.score;
