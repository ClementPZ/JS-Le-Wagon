const isGood = (soldierType) => {
  const goodGuys = ['hobbits', 'elves', 'dwarves', 'eagles'];
  return goodGuys.includes(soldierType.toLowerCase()) ? true : false;
};

const buildSoldierObject = (battlefield) => {
  let team = {};
  const battlefieldArray = battlefield.split(',');
  battlefieldArray.forEach((element) => {
    const soldierType = element.split(':');
    console.log(soldierType[0]);
    team[soldierType[0]] = Number.parseInt(soldierType[1], 10);
  });
  return team
};

const goodGuys = 'Hobbits:4,Dwarves:1,Elves:1,Goblins:100,UrukHai:1';
console.log(buildSoldierObject(goodGuys));

const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie"
};

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
