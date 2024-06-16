ServerEvents.recipes((event) => {
  const { minecraft, botania } = event.recipes;

  // 花肥
  minecraft.crafting_shapeless("4x botania:fertilizer", [
    "minecraft:bone_meal",
    "minecraft:gold_ingot",
    "minecraft:gold_ingot",
    "minecraft:gold_ingot",
    "minecraft:gold_ingot",
  ]);

  // 魔力发射器
  minecraft.crafting_shaped("botania:mana_spreader", ["LLL", "RP ", "LLL"], {
    L: "#botania:livingwood_logs",
    R: "allthecompressed:redstone_block_2x",
    P: "#botania:petals",
  });

  // 沙子变灵魂沙 for 魔力池
  botania.mana_infusion("minecraft:soul_sand", "minecraft:sand", 200, "botania:livingrock");

  // 巧克力棒  for 魔力池
  botania.mana_infusion("create:bar_of_chocolate", "minecraft:sugar_cane", 200, "botania:livingrock");

  // 符文祭坛
  minecraft.crafting_shaped("botania:runic_altar", [" U ", "LLL", "LML"], {
    L: "botania:livingrock",
    U: "thermal:upgrade_augment_3",
    M: "botania:mana_pearl",
  });

  // 符文祭坛
  minecraft.crafting_shaped("botania:runic_altar", [" U ", "LLL", "LML"], {
    L: "botania:livingrock",
    U: "thermal:upgrade_augment_3",
    M: "botania:mana_diamond",
  });

  // 符文 for 符文祭坛
  botania.runic_altar(
    "botania:rune_water",
    ["botania:manasteel_ingot", "botania:mana_powder", "minecraft:iron_ingot", "minecraft:iron_ingot"],
    5000
  );
  botania.runic_altar(
    "botania:rune_fire",
    ["botania:manasteel_ingot", "botania:mana_powder", "minecraft:blaze_rod", "minecraft:blaze_rod"],
    5000
  );
  botania.runic_altar(
    "botania:rune_earth",
    ["botania:manasteel_ingot", "botania:mana_powder", "ars_nouveau:sourcestone", "ars_nouveau:sourcestone"],
    5000
  );
  botania.runic_altar(
    "botania:rune_air",
    ["botania:manasteel_ingot", "botania:mana_powder", "naturesaura:gold_leaf", "naturesaura:gold_leaf"],
    5000
  );
  botania.runic_altar(
    "botania:rune_spring",
    [
      "botania:rune_fire",
      "botania:rune_water",
      "minecraft:wheat_seeds",
      "#minecraft:flowers",
      "#minecraft:flowers",
      "#minecraft:flowers",
    ],
    8000
  );
  botania.runic_altar(
    "botania:rune_summer",
    [
      "botania:rune_earth",
      "botania:rune_air",
      "ars_nouveau:source_berry",
      "minecraft:sand",
      "minecraft:sand",
      "minecraft:sand",
    ],
    8000
  );
  botania.runic_altar(
    "botania:rune_autumn",
    [
      "botania:rune_fire",
      "botania:rune_air",
      "minecraft:wheat",
      "#minecraft:leaves",
      "#minecraft:leaves",
      "#minecraft:leaves",
    ],
    8000
  );
  botania.runic_altar(
    "botania:rune_winter",
    [
      "botania:rune_earth",
      "botania:rune_water",
      "minecraft:lapis_block",
      "minecraft:snow_block",
      "minecraft:snow_block",
      "minecraft:snow_block",
    ],
    8000
  );

  // 钻石 for 泰拉凝聚板
  botania.terra_plate(
    "minecraft:diamond",
    ["thermal:charcoal_block", "thermal:charcoal_block", "allthecompressed:glowstone_block_2x"],
    40000
  );
  botania.terra_plate("minecraft:diamond", ["minecraft:coal", "minecraft:glowstone", "minecraft:ender_eye"], 20000);

  // 创造马达 for 泰拉凝聚板
  botania.terra_plate(
    "create:creative_motor",
    [
      "botania:terrasteel_block",
      "botania:dragonstone_block",
      "createaddition:electric_motor",
      "create:rotation_speed_controller",
    ],
    500000
  );

  // 锇锭 for 泰拉凝聚板
  botania.terra_plate(
    "mekanism:ingot_osmium",
    ["botania:mana_pearl", "botania:gaia_ingot", "botania:mana_diamond"],
    100000
  );

  //盖亚守护者头
  minecraft.crafting_shaped("botania:gaia_head", ["LLL", "LWL", "LLL"], {
    W: "minecraft:wither_skeleton_skull",
    L: "botania:life_essence",
  });

  // 氟石 for 符文祭坛
  botania.runic_altar("16x mekanism:fluorite_gem", ["botania:mana_powder", "minecraft:diamond"], 2000);

  // 永恒魔力池
  minecraft.crafting_shaped("botania:creative_pool", ["TIT", "CBA", "TMT"], {
    I: "allthecompressed:diamond_block_2x",
    B: "botania:mana_pool",
    C: "industrialforegoing:infinity_charger",
    A: "ars_nouveau:creative_source_jar",
    M: "create:creative_motor",
    T: "ae2:creative_energy_cell",
  });

  // 凝矿兰
  botania.petal_apothecary("botania:orechid", [
    "#botania:petals/gray",
    "#botania:petals/gray",
    "#botania:petals/yellow",
    "#botania:petals/green",
    "#botania:petals/red",
    "botania:rune_pride",
    "botania:rune_greed",
    "botania:redstone_root",
    "botania:pixie_dust",
    "mekanism:digital_miner",
  ]);

  // 魔力检测器
  minecraft.crafting_shaped("botania:mana_detector", ["LRL", "RTR", "LRL"], {
    T: "minecraft:target",
    R: "minecraft:redstone",
    L: "botania:livingrock",
  });
});
