// 附魔装置
ServerEvents.recipes((event) => {
  const { ars_nouveau } = event.recipes;

  // 造石机
  ars_nouveau.enchanting_apparatus(
    [
      "minecraft:stone_bricks",
      "minecraft:stone_bricks",
      "minecraft:stone_bricks",
      "minecraft:stone_bricks",
      "minecraft:stone_bricks",
      "minecraft:stone_bricks",
      "ars_nouveau:source_gem",
      "ars_nouveau:archwood_trapdoor",
    ], // 输入物品
    "brickhopper:brick_hopper", // 反应物
    "thermal:device_rock_gen", // 输出物品
    3000, // 魔源消耗
    true // 是否保持nbt
  );

  // 精准采集铁镐
  ars_nouveau.enchanting_apparatus(
    [
      "ars_nouveau:source_gem_block",
      "ars_nouveau:source_gem_block",
      "minecraft:iron_block",
      "minecraft:iron_block",
      "minecraft:copper_block",
      "minecraft:copper_block",
      "thermal:machine_frame",
      "thermal:machine_frame",
    ],
    "minecraft:iron_pickaxe",
    Item.of("minecraft:iron_pickaxe", "{Damage:0,RepairCost:3}")
      .enchant("minecraft:silk_touch", 1)
      .enchant("minecraft:unbreaking", 10),
    3000,
    false
  );

  // 黄金叶
  ars_nouveau.enchanting_apparatus(
    ["botania:mana_powder", "botania:mana_powder", "botania:mana_powder", "botania:mana_powder"],
    "naturesaura:gold_fiber",
    Item.of("naturesaura:gold_leaf", 8),
    500
  );

  // 魔源浆果
  ars_nouveau.enchanting_apparatus(
    ["minecraft:brown_mushroom", "minecraft:red_mushroom"],
    "minecraft:golden_apple",
    "8x ars_nouveau:source_berry",
    3000
  );

  // 粗金
  ars_nouveau.enchanting_apparatus(
    ["minecraft:iron_ingot", "minecraft:copper_ingot"],
    "minecraft:gold_ore",
    "4x minecraft:raw_gold",
    500
  );

  // 粗金
  ars_nouveau.enchanting_apparatus(
    ["create:polished_rose_quartz", "create:polished_rose_quartz"],
    "minecraft:gold_ore",
    "6x minecraft:raw_gold",
    600
  );

  // 抢夺铁剑
  ars_nouveau.enchanting_apparatus(
    [
      "minecraft:quartz_block",
      "minecraft:snow_block",
      "botania:livingrock",
      "botania:livingwood_log",
      "botania:mana_powder",
      "botania:mana_powder",
    ],
    "minecraft:iron_sword",
    Item.of("minecraft:iron_sword", "{Damage:0,RepairCost:3}")
      .enchant("minecraft:unbreaking", 8)
      .enchant("minecraft:looting", 8),
    3000,
    false
  );

  // 不稳定礼物腰带
  ars_nouveau.enchanting_apparatus(
    [
      "allthecompressed:redstone_block_1x",
      "allthecompressed:gold_block_1x",
      "allthecompressed:quartz_block_1x",
      "allthecompressed:copper_block_1x",
      "allthecompressed:iron_block_1x",
      "allthecompressed:snow_block_1x",
      "botania:mana_powder",
      "allthecompressed:redstone_block_1x",
    ],
    "ars_nouveau:mundane_belt",
    "ars_nouveau:belt_of_unstable_gifts",
    3000,
    true
  );

  // 谐振末影桶
  ars_nouveau.enchanting_apparatus(
    ["randblock:half_uncompleted_end_bucket"],
    "randblock:half_uncompleted_end_bucket",
    "thermal:ender_bucket",
    800,
    true
  );

  // 创造植物盆
  ars_nouveau.enchanting_apparatus(
    ["ars_nouveau:creative_source_jar"],
    "botanypotstiers:ultra_terracotta_hopper_botany_pot",
    "botanypotstiers:creative_terracotta_hopper_botany_pot",
    3000,
    true
  );

  // 蜘蛛眼
  ars_nouveau.enchanting_apparatus(
    ["minecraft:dragon_breath"],
    "minecraft:ender_eye",
    "minecraft:spider_eye",
    1000,
    true
  );

  // 无法破坏工具
  ars_nouveau.enchanting_apparatus(
    [
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
    ],
    "minecraft:wooden_pickaxe",
    Item.of("minecraft:wooden_pickaxe", "{Unbreakable:1b}"),
    3000,
    false
  );

  ars_nouveau.enchanting_apparatus(
    [
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
      "#minecraft:planks",
    ],
    "minecraft:wooden_axe",
    Item.of("minecraft:wooden_axe", "{Unbreakable:1b}"),
    3000,
    false
  );

  ars_nouveau.enchanting_apparatus(
    [
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
    ],
    "minecraft:stone_pickaxe",
    Item.of("minecraft:stone_pickaxe", "{Unbreakable:1b}"),
    3000,
    false
  );

  ars_nouveau.enchanting_apparatus(
    [
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
      "minecraft:cobblestone",
    ],
    "minecraft:stone_axe",
    Item.of("minecraft:stone_axe", "{Unbreakable:1b}"),
    3000,
    false
  );

  ars_nouveau.enchanting_apparatus(
    [
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
    ],
    "minecraft:iron_pickaxe",
    Item.of("minecraft:iron_pickaxe", "{Unbreakable:1b}"),
    3000,
    false
  );

  ars_nouveau.enchanting_apparatus(
    [
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
    ],
    "minecraft:iron_axe",
    Item.of("minecraft:iron_axe", "{Unbreakable:1b}"),
    3000,
    false
  );

  ars_nouveau.enchanting_apparatus(
    [
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
    ],
    "minecraft:diamond_pickaxe",
    Item.of("minecraft:diamond_pickaxe", "{Unbreakable:1b}"),
    3000,
    false
  );

  ars_nouveau.enchanting_apparatus(
    [
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
    ],
    "minecraft:diamond_axe",
    Item.of("minecraft:diamond_axe", "{Unbreakable:1b}"),
    3000,
    false
  );
});
