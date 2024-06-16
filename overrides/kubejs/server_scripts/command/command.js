const unsettledGameRules = [
  ["keepInventory", true],
  ["doTraderSpawning", false],
  ["mobGriefing", false],
];

LevelEvents.loaded((event) => {
  const { gameRules } = event.level;

  unsettledGameRules.forEach(([rule, value]) => {
    gameRules.set(rule, value);
  });
});
