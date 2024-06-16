ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  // 磨粉机磨圆石出铁粒
  event.custom({
    type: "thermal:pulverizer",
    ingredient: { tag: "forge:cobblestone" },
    result: [
      { item: "minecraft:gravel" },
      { item: "minecraft:sand", chance: 0.2 },
      { item: "minecraft:flint", chance: 0.1 },
      { item: "minecraft:iron_nugget", chance: 0.15 },
    ],
    experience: 0.1,
  });

  // 磨粉机磨赛特斯石英出赛特斯石英粉
  event.custom({
    type: "thermal:pulverizer",
    ingredient: { item: "ae2:certus_quartz_crystal" },
    result: [{ item: "ae2:certus_quartz_dust" }],
    experience: 0.1,
  });

  // 磨粉机磨充能赛特斯石英出赛特斯石英粉
  event.custom({
    type: "thermal:pulverizer",
    ingredient: { item: "ae2:charged_certus_quartz_crystal" },
    result: [{ item: "ae2:certus_quartz_dust" }],
    experience: 0.1,
  });

  // 磨粉机磨福鲁伊克斯水晶出福鲁伊克斯粉
  event.custom({
    type: "thermal:pulverizer",
    ingredient: { item: "ae2:fluix_crystal" },
    result: [{ item: "ae2:fluix_dust" }],
    experience: 0.1,
  });

  // 磨粉机磨魔源宝石出魔力尘
  event.custom({
    type: "thermal:pulverizer",
    ingredient: { item: "ars_nouveau:source_gem" },
    result: [{ item: "botania:mana_powder" }],
    experience: 0.1,
  });

  // 感应炉做魔源宝石
  event.custom({
    type: "thermal:smelter",
    ingredients: [{ value: [{ item: "minecraft:charcoal" }], count: 1 }],
    result: [{ item: "ars_nouveau:source_gem", count: 1 }],
    energy: 1500,
  });

  // 感应炉做魔源石
  event.custom({
    type: "thermal:smelter",
    ingredients: [
      { value: [{ item: "ars_nouveau:source_gem" }], count: 1 },
      { value: [{ item: "ars_nouveau:red_archwood_log" }], count: 1 },
    ],
    result: [{ item: "ars_nouveau:sourcestone", count: 4 }],
    energy: 1500,
  });

  // 熔岩炉石头烧岩浆
  event.custom({
    type: "thermal:crucible",
    ingredient: { item: "minecraft:cobblestone" },
    result: [{ fluid: "minecraft:lava", amount: 1000 }],
    energy: 2000,
  });

  // 红石熔炼炉烧木炭块
  const charcoal = [
    "allthecompressed:acacia_log_block_1x",
    "allthecompressed:birch_log_block_1x",
    "allthecompressed:dark_oak_log_block_1x",
    "allthecompressed:jungle_log_block_1x",
    "allthecompressed:oak_log_block_1x",
    "allthecompressed:spruce_log_block_1x",
  ];
  for (let i of charcoal) {
    event.custom({
      type: "thermal:furnace",
      ingredient: { item: `${i}` },
      result: { item: "thermal:charcoal_block" },
      experience: 0.3,
      energy_mod: 1.0,
    });
  }

  // 青金石矿石磨粉
  event.custom({
    type: "thermal:pulverizer",
    ingredient: { tag: "forge:ores/lapis" },
    result: [
      { item: "minecraft:lapis_lazuli", chance: 12.5 },
      { item: "thermal:sulfur", chance: 4 },
    ],
    experience: 0.5,
  });

  // 下届合金碎片
  event.custom({
    type: "thermal:bottler",
    ingredients: [{ item: "randblock:magic_scrap" }, { fluid_tag: "minecraft:lava", amount: 1000 }],
    result: [{ item: "minecraft:netherite_scrap" }],
  });

  // 凋零骷髅头
  event.custom({
    type: "thermal:bottler",
    ingredients: [{ item: "botania:gaia_head" }, { fluid: "industrialforegoing:latex", amount: 1000 }],
    result: [{ item: "minecraft:wither_skeleton_skull" }],
  });

  // 稀释龙息
  event.custom({
    type: "thermal:bottler",
    ingredients: [{ item: "minecraft:glass_bottle" }, { fluid: "randblock:diluent_dragon_breath", amount: 250 }],
    result: [{ item: "randblock:diluent_dragon_breath" }],
  });

  // 铀锭
  event.custom({
    type: "thermal:chiller",
    ingredients: [{ fluid: "mekanism:uranium_hexafluoride", amount: 200 }, { item: "thermal:chiller_ingot_cast" }],
    result: [{ item: "mekanism:ingot_uranium", count: 1 }],
    energy: 20000,
  });

  // 感应炉做银锭锡锭铅锭
  event.custom({
    type: "thermal:smelter",
    ingredients: [
      { value: [{ item: "ars_nouveau:wixie_shards" }], count: 4 },
      { value: [{ item: "minecraft:dragon_breath" }], count: 4 },
      { value: [{ item: "ars_nouveau:glyph_randomize" }], count: 4 },
    ],
    result: [
      { item: "thermal:silver_ingot", count: 8, chance: 0.5 },
      { item: "thermal:tin_ingot", count: 8, chance: 0.5 },
      { item: "thermal:lead_ingot", count: 8, chance: 0.5 },
      { item: "thermal:gold_coin", count: 1, chance: 0.4 },
    ],
    energy: 8000,
  });

  // 急速冷冻机制作红石块
  event.custom({
    type: "thermal:chiller",
    ingredient: { fluid: "thermal:redstone", amount: 900 },
    result: [{ item: "minecraft:redstone_block" }],
    energy: 6000,
  });

  // 木炭块
  minecraft.crafting_shapeless("thermal:charcoal_block", [
    "minecraft:charcoal",
    "minecraft:charcoal",
    "minecraft:charcoal",
    "minecraft:charcoal",
    "minecraft:charcoal",
    "minecraft:charcoal",
    "minecraft:charcoal",
    "minecraft:charcoal",
    "minecraft:charcoal",
  ]);

  // 斯特林能源炉
  minecraft.crafting_shaped("4x thermal:dynamo_stirling", [" G ", "JIJ", "SBS"], {
    G: "ars_nouveau:source_gem",
    J: "ars_nouveau:source_jar",
    I: "ars_nouveau:imbuement_chamber",
    S: "minecraft:stone_bricks",
    B: "thermal:charcoal_block",
  });

  // 磨粉机
  minecraft.crafting_shaped("thermal:machine_pulverizer", [" C ", "JSJ", "CLC"], {
    C: "minecraft:cobblestone",
    J: "ars_nouveau:source_jar",
    S: "ars_nouveau:source_gem",
    L: "ars_nouveau:lava_lily",
  });

  // 红石伺服器
  minecraft.crafting_shaped("thermal:redstone_servo", [" M ", " I ", " M "], {
    M: "botania:mana_powder",
    I: "minecraft:iron_ingot",
  });

  //红石通量线圈
  minecraft.crafting_shaped("thermal:rf_coil", ["  M", " C ", "M  "], {
    M: "botania:mana_powder",
    C: "minecraft:copper_ingot",
  });

  // 机器框架
  minecraft.crafting_shaped("thermal:machine_frame", ["IGI", "GRG", "IGI"], {
    I: "minecraft:iron_ingot",
    G: "#forge:glass",
    R: "thermal:iron_gear",
  });

  // 感应炉
  minecraft.crafting_shaped("thermal:machine_smelter", [" B ", "SMS", "CRC"], {
    B: "minecraft:blast_furnace",
    S: "#forge:sand",
    M: "thermal:machine_frame",
    C: "thermal:copper_gear",
    R: "thermal:rf_coil",
  });

  // 锭注模
  minecraft.crafting_shaped("thermal:chiller_ingot_cast", [" B ", "BRB", " B "], {
    B: "create:brass_sheet",
    R: "minecraft:brick",
  });

  // 急速冷冻机
  minecraft.crafting_shaped("thermal:machine_chiller", [" G ", "SMS", "IRI"], {
    G: "#forge:glass",
    S: "minecraft:quartz_block",
    M: "thermal:machine_frame",
    I: "thermal:iron_gear",
    R: "thermal:rf_coil",
  });

  // 球形注模
  minecraft.crafting_shaped("thermal:chiller_ball_cast", [" B ", "BSB", " B "], {
    B: "create:brass_sheet",
    S: "minecraft:snowball",
  });

  // 杆注模
  minecraft.crafting_shaped("thermal:chiller_rod_cast", [" B ", "BSB", " B "], {
    B: "create:brass_sheet",
    S: "minecraft:stick",
  });

  // 真空箱子
  minecraft.crafting_shaped("thermal:device_collector", ["MRM", "ECE", "MUM"], {
    C: "minecraft:chest",
    U: "thermal:upgrade_augment_2",
    M: "botania:mana_glass",
    E: "minecraft:ender_pearl",
    R: "minecraft:redstone",
  });

  // 红石熔炼炉
  minecraft.crafting_shaped("thermal:machine_furnace", [" M ", "BAB", "CRC"], {
    M: "botania:mana_powder",
    B: "minecraft:bricks",
    A: "thermal:machine_frame",
    C: "thermal:copper_gear",
    R: "thermal:rf_coil",
  });

  // 硬化组件
  minecraft.crafting_shaped("thermal:upgrade_augment_1", ["CGC", "MOM", "CGC"], {
    C: "minecraft:copper_block",
    G: "minecraft:glass",
    M: "botania:mana_powder",
    O: "thermal:copper_gear",
  });

  // 强化组件
  minecraft.crafting_shaped("thermal:upgrade_augment_2", ["BGB", "AUA", "BGB"], {
    B: "minecraft:gold_block",
    G: "#forge:glass",
    A: "minecraft:golden_apple",
    U: "thermal:upgrade_augment_1",
  });

  // 谐振组件
  minecraft.crafting_shaped("thermal:upgrade_augment_3", ["EOE", "RUR", "EOE"], {
    E: "minecraft:ender_pearl",
    O: "thermal:obsidian_glass",
    R: "minecraft:redstone_block",
    U: "thermal:upgrade_augment_2",
  });

  // 通量链接放大器
  minecraft.crafting_shaped("thermal:machine_speed_augment", [" R ", "RMR", " R "], {
    R: "thermal:rf_coil",
    M: "botania:mana_powder",
  });

  // 熔岩炉
  minecraft.crafting_shaped("thermal:machine_crucible", [" G ", "BMB", "CRC"], {
    G: "#forge:glass",
    B: "create:brass_ingot",
    M: "thermal:machine_frame",
    C: "thermal:copper_gear",
    R: "thermal:rf_coil",
  });

  // 水槽
  minecraft.crafting_shapeless("cookingforblockheads:sink", ["thermal:device_water_gen", "thermal:device_water_gen"]);

  // 序列装配台
  minecraft.crafting_shaped("thermal:machine_crafter", [" C ", "GMG", "ORO"], {
    C: "minecraft:crafting_table",
    G: "minecraft:gold_ingot",
    M: "thermal:machine_frame",
    O: "thermal:copper_gear",
    R: "thermal:rf_coil",
  });

  // 币
  minecraft.crafting_shapeless("thermal:iron_coin", [
    "thermal:copper_coin",
    "thermal:copper_coin",
    "thermal:copper_coin",
    "thermal:copper_coin",
    "thermal:copper_coin",
    "thermal:copper_coin",
    "thermal:copper_coin",
    "thermal:copper_coin",
    "thermal:copper_coin",
  ]);
  minecraft.crafting_shapeless("thermal:gold_coin", [
    "thermal:iron_coin",
    "thermal:iron_coin",
    "thermal:iron_coin",
    "thermal:iron_coin",
    "thermal:iron_coin",
    "thermal:iron_coin",
    "thermal:iron_coin",
    "thermal:iron_coin",
    "thermal:iron_coin",
  ]);
  minecraft.crafting_shapeless("thermal:netherite_coin", [
    "thermal:gold_coin",
    "thermal:gold_coin",
    "thermal:gold_coin",
    "thermal:gold_coin",
    "thermal:gold_coin",
    "thermal:gold_coin",
    "thermal:gold_coin",
    "thermal:gold_coin",
    "thermal:gold_coin",
  ]);
  minecraft.crafting_shapeless("thermal:enderium_coin", [
    "thermal:netherite_coin",
    "thermal:netherite_coin",
    "thermal:netherite_coin",
    "thermal:netherite_coin",
    "thermal:netherite_coin",
    "thermal:netherite_coin",
    "thermal:netherite_coin",
    "thermal:netherite_coin",
    "thermal:netherite_coin",
  ]);

  minecraft.crafting_shapeless("9x thermal:copper_coin", ["thermal:iron_coin"]);
  minecraft.crafting_shapeless("9x thermal:iron_coin", ["thermal:gold_coin"]);
  minecraft.crafting_shapeless("9x thermal:gold_coin", ["thermal:netherite_coin"]);
  minecraft.crafting_shapeless("9x thermal:netherite_coin", ["thermal:enderium_coin"]);

  // 通量植育土
  minecraft.crafting_shaped("thermal:phytosoil", ["CMC", "MDM", "CMC"], {
    M: "botania:mana_powder",
    D: "minecraft:dirt",
    C: "minecraft:charcoal",
  });

  // 销毁器
  minecraft.crafting_shaped("thermal:device_nullifier", ["ISI", "GLG", "IRI"], {
    R: "thermal:redstone_servo",
    L: "minecraft:lava_bucket",
    G: "#forge:glass",
    S: "minecraft:redstone",
    I: "minecraft:gold_ingot",
  });
});
