const isGood = (soldierType) => {
  const goodGuys = ['hobbits', 'elves', 'dwarves', 'eagles'];
  return goodGuys.includes(soldierType.toLowerCase()) ? true : false;
};


const buildSoldierObject = (battlefield) => {
  // TODO: Given a battlefield (String), return an object of forces.
};

const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
};



module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
