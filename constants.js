module.exports.battlefieldRoles = [
  "HQ",
  "Troops",
  "Elites",
  "Fast Attack",
  "Dedicated Transport",
  "Flyer",
  "Lord of War",
];

module.exports.factions = [
  "T'au",
  "Grey Knights",
  "Harlequins",
  "Orks",
  "Death Guard",
  "Dark Angels",
  "Custodes",
];

module.exports.objectToOptions = (obj) =>
  Object.entries(obj).map(([value, label]) => ({
    value,
    label,
  }));

module.exports.missionTypes = {
  combatPatrol: "Combat Patrol",
  incursion: "Incursion",
  strikeForce: "Strike Force",
  onslaught: "Onslaught",
};

module.exports.battleStatuses = {
  planning: "Planning",
  inProgress: "In Progress",
  completed: "Completed",
};

module.exports.missions = {
  grandTournament: {
    combatPatrol: [],
    incursion: [],
    strikeForce: [],
    onslaught: [],
  },
  eternalWar: {
    combatPatrol: [],
    incursion: [],
    strikeForce: [
      {
        name: "The Four Pillars",
        briefing: "blah blah",
        rules: "More blah blah",
        primary: {
          name: "Take and Hold",
          rules: "So much text",
        },
        secondaries: [],
      },
    ],
    onslaught: [],
  },
};
