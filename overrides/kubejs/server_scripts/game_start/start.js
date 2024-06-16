PlayerEvents.loggedIn((event) => {
  const { player } = event;

  if (!player.persistentData.getBoolean("first_join")) {
    player.persistentData.putBoolean("first_join", true);
    player.teleportTo("minecraft:overworld", 8, 65, 8, 0, 0);
  }
});
