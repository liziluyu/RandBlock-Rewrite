ServerEvents.recipes((event) => {
  // 种植青金石矿
  event.recipes.botanypots.crop(
    "minecraft:lapis_ore",
    ["infused_grass"],
    { block: "minecraft:lapis_ore" },
    [Item.of("minecraft:lapis_ore").withChance(100).withRolls(1, 3)],
    600,
    1
  );

  // 注魔土注册
  event.recipes.botanypots.soil(
    "botania:infused_grass", // 与该土壤相关联的物品
    { block: "botania:infused_grass" }, // 显示的方块
    ["infused_grass"], // 该土壤提供的分类
    100, // 该土壤提供的生长Ticks，设置为-1表示没有修饰符
    1 // 可选，生长修饰符，例如：0.5表示所有作物需要一半的时间
  );

  // 种植橡胶树
  event.recipes.botanypots.crop(
    "thermal:rubberwood_sapling",
    ["rubber_block"],
    { block: "thermal:rubberwood_sapling" },
    [
      Item.of("thermal:rubberwood_sapling").withChance(10).withRolls(1, 2),
      Item.of("thermal:rubberwood_log").withChance(100).withRolls(2, 4),
      Item.of("thermal:rubber").withChance(100).withRolls(2, 6),
    ],
    600,
    1
  );

  // 橡胶块注册
  event.recipes.botanypots.soil(
    "thermal:rubber_block", // 与该土壤相关联的物品
    { block: "thermal:rubber_block" }, // 显示的方块
    ["rubber_block"], // 该土壤提供的分类
    100, // 该土壤提供的生长Ticks，设置为-1表示没有修饰符
    1 // 可选，生长修饰符，例如：0.5表示所有作物需要一半的时间
  );

  // 种植橡胶树
  event.recipes.botanypots.crop(
    "ars_nouveau:red_archwood_sapling",
    ["phytosoil"],
    { block: "ars_nouveau:red_archwood_sapling" },
    [Item.of("ars_nouveau:red_archwood_log").withChance(100).withRolls(2, 6)],
    600,
    1
  );

  // 通量植育土注册
  event.recipes.botanypots.soil(
    "thermal:phytosoil", // 与该土壤相关联的物品
    { block: "thermal:phytosoil" }, // 显示的方块
    ["phytosoil"], // 该土壤提供的分类
    100, // 该土壤提供的生长Ticks，设置为-1表示没有修饰符
    5 // 可选，生长修饰符，例如：0.5表示所有作物需要一半的时间
  );
});
