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
  combatPatrol: { label: "Combat Patrol", maxPoints: 500, startingCP: 3 },
  incursion: { label: "Incursion", maxPoints: 1000, startingCP: 6 },
  strikeForce: { label: "Strike Force", maxPoints: 2000, startingCP: 12 },
  onslaught: { label: "Onslaught", maxPoints: 3000, startingCP: 15 },
};

module.exports.battleStatuses = {
  planning: "Planning",
  inProgress: "In Progress",
  completed: "Completed",
};

/*
As this repository is public on npm, I wanted to make sure that the rules were not duplicated, so word content
has been left blank below

The amount below should be enough to aid anyone who has a copy of the core rulebook at hand
*/

// prettier-ignore
module.exports.missions = [
  { source: "core rulebook", type: "Eternal War", page: 286, forceSize: "combatPatrol", name: "Incisive Attack", briefing: "", rules: "", primary: "Take and Hold", secondary: "Surgical Assault" },
  { source: "core rulebook", type: "Eternal War", page: 287, forceSize: "combatPatrol", name: "Outriders", briefing: "", rules: "", primary: "Take and Hold", secondary: "Survey" },
  { source: "core rulebook", type: "Eternal War", page: 288, forceSize: "combatPatrol", name: "Encircle", briefing: "", rules: "", primary: "Take and Hold", secondary: "Encircle" },
  { source: "core rulebook", type: "Eternal War", page: 290, forceSize: "incursion", name: "Divide and Conquer", briefing: "", rules: "", primary: "Take and Hold", secondary: "Lines of Demarcation" },
  { source: "core rulebook", type: "Eternal War", page: 290, forceSize: "incursion", name: "Crossfire", briefing: "", rules: "", primary: "Take and Hold", secondary: "Outflank" },
  { source: "core rulebook", type: "Eternal War", page: 291, forceSize: "incursion", name: "Centre Ground", briefing: "", rules: "", primary: "Take and Hold", secondary: "Centre Ground" },
  { source: "core rulebook", type: "Eternal War", page: 292, forceSize: "incursion", name: "Forward Push", briefing: "", rules: "", primary: "Take and Hold", secondary: "Forward Push" },
  { source: "core rulebook", type: "Eternal War", page: 293, forceSize: "incursion", name: "Ransack", briefing: "", rules: "", primary: "Domination", secondary: "Ransack" },
  { source: "core rulebook", type: "Eternal War", page: 294, forceSize: "incursion", name: "Shifting Front", briefing: "", rules: "", primary: "Take and Hold", secondary: "Test Their Line" },
  { source: "core rulebook", type: "Eternal War", page: 295, forceSize: "strikeForce", name: "Retrieval Mission", briefing: "", rules: "", primary: "Take and Hold", secondary: "Minimize Losses" },
  { source: "core rulebook", type: "Eternal War", page: 296, forceSize: "strikeForce", name: "Frontline Warfare", briefing: "", rules: "", primary: "Take and Hold", secondary: "Vital Ground" },
  { source: "core rulebook", type: "Eternal War", page: 297, forceSize: "strikeForce", name: "The Four Pillars", briefing: "", rules: "", primary: "Take and Hold", secondary: "Siphon Power" },
  { source: "core rulebook", type: "Eternal War", page: 298, forceSize: "strikeForce", name: "No Man's Land", briefing: "", rules: "", primary: "Take and Hold", secondary: "Secure No Man's Land" },
  { source: "core rulebook", type: "Eternal War", page: 299, forceSize: "strikeForce", name: "Scorched Earth", briefing: "", rules: "", primary: "Take and Hold", secondary: "Raze" },
  { source: "core rulebook", type: "Eternal War", page: 300, forceSize: "strikeForce", name: "Vital Intelligence", briefing: "", rules: "", primary: "Domination", secondary: "Data Intercept" },
  { source: "core rulebook", type: "Eternal War", page: 301, forceSize: "onslaught", name: "Lines of Battle", briefing: "", rules: "", primary: "Unified Advance", secondary: "Hold the Centre" },
  { source: "core rulebook", type: "Eternal War", page: 302, forceSize: "onslaught", name: "All-out War", briefing: "", rules: "", primary: "Domination", secondary: "Surround Them" },
  { source: "core rulebook", type: "Eternal War", page: 303, forceSize: "onslaught", name: "Pathway to Glory", briefing: "", rules: "", primary: "Domination", secondary: "Search for the Portal" },
];

// prettier-ignore
module.exports.objectives = [
  // { source: "core rulebook", category: "", name: "", rules: `` },
  { source: "core rulebook", category: "primary", name: "Take and Hold", rules: `` },
  { source: "core rulebook", category: "primary", name: "Domination", rules: `` },
  { source: "core rulebook", category: "primary", name: "Unified Advance", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Surgical Assault", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Survey", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Encircle", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Lines of Demarcation", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Outflank", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Centre Ground", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Forward Push", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Ransack", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Test Their Line", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Minimize Losses", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Vital Ground", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Siphon Power", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Secure No Man's Land", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Raze", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Data Intercept", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Hold the Centre", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Surround Them", rules: `` },
  { source: "core rulebook", category: "missionSecondary", name: "Search for the Portal", rules: `` },
  { source: "core rulebook", category: "Purge the Enemy", name: "Assassinate", rules: `` },
  { source: "core rulebook", category: "Purge the Enemy", name: "Titan Slayer", rules: `` },
  { source: "core rulebook", category: "Purge the Enemy", name: "Slay the Warlord", rules: `` },
  { source: "core rulebook", category: "No Mercy, No respite", name: "Thin Their Ranks", rules: `` },
  { source: "core rulebook", category: "No Mercy, No respite", name: "Attrition", rules: `` },
  { source: "core rulebook", category: "No Mercy, No respite", name: "While we Stand, We Fight", rules: `` },
  { source: "core rulebook", category: "No Mercy, No respite", name: "First Strike", rules: `` },
  { source: "core rulebook", category: "Battlefield Supremacy", name: "Engage on All Fronts", rules: `` },
  { source: "core rulebook", category: "Battlefield Supremacy", name: "Linebreaker", rules: `` },
  { source: "core rulebook", category: "Battlefield Supremacy", name: "Domination", rules: `` },
  { source: "core rulebook", category: "Shadow Operations", name: "Investigate Sites", rules: `` },
  { source: "core rulebook", category: "Shadow Operations", name: "Repair Teleport Homer", rules: `` },
  { source: "core rulebook", category: "Shadow Operations", name: "Raise the Banners High", rules: `` },
  { source: "core rulebook", category: "Warpcraft", name: "Mental Interrogation", rules: `` },
  { source: "core rulebook", category: "Warpcraft", name: "Psychic Ritual", rules: `` },
  { source: "core rulebook", category: "Warpcraft", name: "Abhor the Witch", rules: `` },
]
