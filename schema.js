const { Color } = require("@keystonejs/fields-color");
const { Markdown } = require("@keystonejs/fields-markdown");
const { access } = require("./access");

const {
  Text,
  Checkbox,
  Password,
  Select,
  Relationship,
  Integer,
} = require("@keystonejs/fields");

const {
  battlefieldRoles,
  factions,
  missionTypes,
  battleStatuses,
  objectToOptions,
} = require("./constants");

module.exports.User = {
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
    email: {
      type: Text,
      isUnique: true,
      isRequired: true,
    },
    isAdmin: {
      type: Checkbox,
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
};

module.exports.Army = {
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
};

module.exports.Unit = {
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
};

module.exports.Battle = {
  fields: {
    army1: { type: Relationship, ref: "BattleInfo" },
    army2: { type: Relationship, ref: "BattleInfo" },
    points: { type: Integer },
    // mission: { type: Relationship, ref: "Mission" },
    mission: { type: Text },
    // primary: { type: Text },
    setupDescription: { type: Markdown },
    description: { type: Markdown },
    status: {
      type: Select,
      options: objectToOptions(battleStatuses),
    },
  },
};

module.exports.BattleInfo = {
  fields: {
    army: { type: Relationship, ref: "Army" },
    primary: { type: Relationship, ref: "Objective" },
    secondaries: { type: Relationship, ref: "Objective", many: true },
    CP: { type: Integer, defaultValue: 0 },
    notes: { type: Markdown },
  },
};

module.exports.Mission = {
  fields: {
    name: { type: Text },
    source: { type: Text },
    briefing: { type: Markdown },
    forceSize: {
      type: Select,
      options: objectToOptions(missionTypes),
    },
    rules: { type: Markdown },
    primary: { type: Relationship, ref: "Objective" },
    secondaries: { type: Relationship, ref: "Objective", many: true },
    // TODO: I would love to get scans of the maps in here
    // battleLayout: { type: Image },
  },
};

module.exports.Objective = {
  fields: {
    name: { type: Text },
    score: { type: Integer },
    rules: { type: Markdown },
  },
};

/*
Future lists:

List - a list linked to an army with units and a points value
Maybe link List to a battle?
Conceptually, you link all your units to your army, and then you select from units in your army to make a list quickly
This leads to a whole lot more flows though, so lots more pages
*/
