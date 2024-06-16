ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  // 空白升级
  minecraft.crafting_shaped("modularrouters:blank_upgrade", ["PPG", "PBG", " PG"], {
    G: "minecraft:gold_nugget",
    P: "minecraft:paper",
    B: "create:brass_ingot",
  });
});
