const isGood = (soldierType) => {
  const goodGuys = ['hobbits', 'elves', 'dwarves', 'eagles'];
  return goodGuys.includes(soldierType.toLowerCase()) ? true : false;
};

const buildSoldierObject = (battlefield) => {
  let team = {};
  const battlefieldArray = battlefield.split(',');
  battlefieldArray.forEach((element) => {
    const soldierType = element.split(':');
    team[soldierType[0]] = Number.parseInt(soldierType[1], 10);
  });
  return team
};

const goodGuys = 'Hobbits:4,Dwarves:1,Elves:1,Goblins:1,UrukHai:1';

const whoWinsTheWar = (battlefield) => {
  const soldierObject = buildSoldierObject(battlefield);
  let goodGuysPoints = 0;
  let badGuysPoints = 0;
  Object.keys(soldierObject).forEach((key) => {
    isGood(key) ? goodGuysPoints += soldierObject[key] : badGuysPoints += soldierObject[key];
  });
  if (goodGuysPoints === badGuysPoints || battlefield === "") {
    return "Tie";
  } else if (goodGuysPoints > badGuysPoints) {
      return "Good";
  } else {
      return "Evil";
  }
};

console.log(whoWinsTheWar(goodGuys));

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
