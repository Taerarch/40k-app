const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { Text, Relationship } = require("@keystonejs/fields");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NextApp } = require("@keystonejs/app-next");
const initialiseData = require("./initial-data");

const { KnexAdapter: Adapter } = require("@keystonejs/adapter-knex");
const {
  Army,
  User,
  Unit,
  Battle,
  BattleInfo,
  Mission,
  Objective,
  ObjectiveOption,
} = require("./schema");

const PROJECT_NAME = "40k-app";

process.env.CONNECT_TO =
  process.env.DATABASE_URL || "postgres://localhost/40k-app";

const keystone = new Keystone({
  adapter: new Adapter(),
  onConnect: initialiseData,
  cookieSecret: process.env.COOKIE_SECRET || "this-is-a-bad-secret",
});

keystone.createList("User", User);
keystone.createList("Army", Army);
keystone.createList("Unit", Unit);
keystone.createList("Battle", Battle);
keystone.createList("BattleInfo", BattleInfo);
keystone.createList("Mission", Mission);
keystone.createList("Objective", Objective);
keystone.createList("ObjectiveOption", ObjectiveOption);

keystone.createList("Planet", {
  fields: {
    name: { type: Text },
    battlefields: {
      type: Relationship,
      ref: "Battlefield",
      many: true,
    },
  },
});

keystone.createList("Battlefield", {
  fields: {
    gridReference: { type: Text },
    controller: { type: Relationship, ref: "Army" },
    battles: { type: Relationship, ref: "Battle", many: true },
  },
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: false,
      authStrategy,
    }),
    new NextApp({ dir: "app" }),
  ],
  configureExpress: (app) => {
    app.set("trust proxy", 1);
  },
};
