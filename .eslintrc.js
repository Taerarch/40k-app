module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@ts-gql", "@typescript-eslint"],
  extends: ["prettier", "prettier/@typescript-eslint"],
  rules: {
    "@ts-gql/ts-gql": "error",
  },
};
