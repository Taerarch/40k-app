const battlefieldRoles = [
  "HQ",
  "Troops",
  "Elites",
  "Fast Attack",
  "Dedicated Transport",
  "Flyer",
  "Lord of War",
];

// const missions = ["Combat Patrol", "Incursion", "Strike Force", "Onslaught"];

const factions = [
  "T'au",
  "Grey Knights",
  "Harlequins",
  "Orks",
  "Death Guard",
  "Dark Angels",
  "Custodes",
];

const missions = {
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

module.exports = { battlefieldRoles, factions, missions };
