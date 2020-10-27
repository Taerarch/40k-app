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
const { Color } = require("@keystonejs/fields-color");
const { Markdown } = require("@keystonejs/fields-markdown");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NextApp } = require("@keystonejs/app-next");
const initialiseData = require("./initial-data");
const { battlefieldRoles, factions } = require("./constants");

const { KnexAdapter: Adapter } = require("@keystonejs/adapter-knex");
const PROJECT_NAME = "40k-app";

process.env.CONNECT_TO = "postgres://localhost/40k-app";

const keystone = new Keystone({
  adapter: new Adapter(),
  onConnect: initialiseData,
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
    primaryColor: { type: Color },
    secondaryColor: { type: Color },
    highlightColor: { type: Color },
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
    armyBattleInfo1: { type: Relationship, ref: "ArmyBattleInfo" },
    armyBattleInfo2: { type: Relationship, ref: "ArmyBattleInfo" },
    points: { type: Integer },
    // mission: { type: Relationship, ref: "Mission" },
    mission: { type: Text },
    setupDescription: { type: Markdown },
    description: { type: Markdown },
    status: {
      type: Select,
      options: [
        { value: "planning", label: "planning" },
        { value: "inProgress", label: "in progress" },
        { value: "completed", label: "completed" },
      ],
    },
  },
});

keystone.createList("ArmyBattleInfo", {
  fields: {
    army: { type: Relationship, ref: "Army" },
    primaryScore: { type: Integer },
    secondary1Score: { type: Integer },
    secondary2Score: { type: Integer },
    secondary3Score: { type: Integer },
    secondary1: { type: Text },
    secondary2: { type: Text },
    secondary3: { type: Text },
  },
});

// keystone.createList("Mission", {
//   name: { type: Text },
//   forceSize: {
//     type: Select,
//     options: ["Combat Patrol", "Incursion", "Strike Force", "Onslaught"],
//   },
//   battleLayout: { type: Image },
//   description: { type: Markdown },
// });

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
      enableDefaultRoute: true,
      authStrategy,
    }),
    new NextApp({ dir: "app" }),
  ],
};
