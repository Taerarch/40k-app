const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const {
  Text,
  Checkbox,
  Password,
  Select,
  Relationship,
  Integer,
} = require("@keystonejs/fields");
const { Markdown } = require("@keystonejs/fields-markdown");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NextApp } = require("@keystonejs/app-next");
const initialiseData = require("./initial-data");
const { battlefieldRoles, factions } = require("./constants");

const { KnexAdapter: Adapter } = require("@keystonejs/adapter-knex");
const PROJECT_NAME = "40k-app";

process.env.CONNECT_TO = "postgres://localhost/40k_app";

const keystone = new Keystone({
  adapter: new Adapter(),
  onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList("User", {
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
    email: {
      type: Text,
      isUnique: true,
      isRequired: true,
    },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      access: {
        update: access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
    armies: { type: Relationship, ref: "Army.owner", many: true },
  },
  // List-level access controls
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList("Army", {
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
    description: { type: Markdown },
    armyRules: { type: Markdown },
    faction: { type: Select, options: factions, dataType: "string" },
    units: { type: Relationship, ref: "Unit.army", many: true },
    owner: { type: Relationship, ref: "User.armies" },
  },
});

keystone.createList("Unit", {
  fields: {
    name: { type: Text },
    points: { type: Integer },
    army: { type: Relationship, ref: "Army.units" },
    battleFieldRole: {
      type: Select,
      options: battlefieldRoles,
      dataType: "string",
    },
  },
});

keystone.createList("Battle", {
  fields: {
    army1: { type: Relationship, ref: "Army" },
    army2: { type: Relationship, ref: "Army" },
    points: { type: Integer },
    mission: { type: Text },
    army1Score: { type: Integer },
    army2Score: { type: Integer },
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
      enableDefaultRoute: true,
      authStrategy,
    }),
    new NextApp({ dir: "app" }),
  ],
};
