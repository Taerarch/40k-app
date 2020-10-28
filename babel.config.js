module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    "@scentregroup/ui/src/babel-plugin-ui-imports",
    "@ts-gql/babel-plugin",
  ],
  env: {
    test: {
      plugins: ["babel-plugin-dynamic-import-node", "require-context-hook"],
    },
  },
};
