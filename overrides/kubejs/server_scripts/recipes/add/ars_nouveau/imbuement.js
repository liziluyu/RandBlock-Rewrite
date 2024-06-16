// 灌注室
ServerEvents.recipes((event) => {
  const { ars_nouveau } = event.recipes;
  
  // 木炭
  ars_nouveau.imbuement(
    "ars_nouveau:red_archwood_log", //输入物品
    "minecraft:charcoal", // 输出物品
    300, // 魔源消耗
    [] // 基座物品
  );

  // 魔源宝石
  ars_nouveau.imbuement("thermal:charcoal_block", "ars_nouveau:source_gem", 1000, []);

  // 漏斗
  ars_nouveau.imbuement("minecraft:chest", "brickhopper:brick_hopper", 1500, [
    "ars_nouveau:sourcestone",
    "ars_nouveau:sourcestone",
    "ars_nouveau:sourcestone",
  ]);

  // 附魔装置
  ars_nouveau.imbuement("brickhopper:brick_hopper", "ars_nouveau:enchanting_apparatus", 3000, [
    "ars_nouveau:sourcestone",
    "ars_nouveau:source_gem",
    "minecraft:chest",
    "thermal:charcoal_block",
  ]);

  // 奥术核心
  ars_nouveau.imbuement("ars_nouveau:source_gem", "ars_nouveau:arcane_core", 3000, [
    "ars_nouveau:sourcestone",
    "ars_nouveau:source_gem",
  ]);

  // 圆石
  ars_nouveau.imbuement("ars_nouveau:red_archwood_log", "minecraft:cobblestone", 1000, [
    "ars_nouveau:source_gem",
  ]);

  // 铜锭
  ars_nouveau.imbuement("ars_nouveau:sourcestone", "minecraft:copper_ingot", 500, [
    "botania:mana_powder",
    "thermal:machine_smelter",
    "thermal:machine_furnace",
  ]);

  // 粗铁
  ars_nouveau.imbuement("minecraft:iron_ore", Item.of("minecraft:raw_iron", 4), 500, []);

  // 金矿石
  ars_nouveau.imbuement("minecraft:raw_gold", "minecraft:gold_ore", 600, [
    "minecraft:golden_apple",
    "minecraft:gold_ore",
  ]);

  // 充能赛特斯石英
  ars_nouveau.imbuement("ae2:certus_quartz_crystal", "ae2:charged_certus_quartz_crystal", 500, []);

  // 随机化符文
  ars_nouveau.imbuement("minecraft:shulker_shell", "ars_nouveau:glyph_randomize", 500, [
    "minecraft:dragon_head",
    "minecraft:dragon_egg",
    "minecraft:elytra",
  ]);
});
