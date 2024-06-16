ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  // 橡胶
  event.custom({
    type: "industrialforegoing:fluid_extractor",
    breakChance: 0.01,
    defaultRecipe: false,
    input: { item: "thermal:rubberwood_log" },
    output: '{Amount:100,FluidName:"industrialforegoing:latex"}',
    result: "minecraft:air",
  });

  // ae2电路板&处理器 for 化学溶解室
  event.custom({
    type: "industrialforegoing:dissolution_chamber",
    input: [{ item: "ae2:silicon" }],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
    output: { item: "ae2:printed_silicon", count: 1 },
    processingTime: 200,
  });

  event.custom({
    type: "industrialforegoing:dissolution_chamber",
    input: [{ item: "ae2:certus_quartz_crystal" }, { item: "ae2:printed_silicon" }, { item: "minecraft:redstone" }],
    inputFluid: '{Amount:2000,FluidName:"industrialforegoing:latex"}',
    output: { item: "ae2:calculation_processor", count: 1 },
    processingTime: 200,
  });

  event.custom({
    type: "industrialforegoing:dissolution_chamber",
    input: [{ item: "minecraft:gold_ingot" }, { item: "ae2:printed_silicon" }, { item: "minecraft:redstone" }],
    inputFluid: '{Amount:2000,FluidName:"industrialforegoing:latex"}',
    output: { item: "ae2:logic_processor", count: 1 },
    processingTime: 200,
  });

  event.custom({
    type: "industrialforegoing:dissolution_chamber",
    input: [{ item: "minecraft:diamond" }, { item: "ae2:printed_silicon" }, { item: "minecraft:redstone" }],
    inputFluid: '{Amount:2000,FluidName:"industrialforegoing:latex"}',
    output: { item: "ae2:engineering_processor", count: 1 },
    processingTime: 200,
  });

  // 机器框架 for 化学溶解室
  event.custom({
    type: "industrialforegoing:dissolution_chamber",
    input: [
      { tag: "forge:plastic" },
      { tag: "industrialforegoing:machine_frame/pity" },
      { tag: "forge:plastic" },
      { item: "create:brass_ingot" },
      { item: "create:brass_ingot" },
      { tag: "forge:ingots/iron" },
      { tag: "forge:gears/gold" },
      { tag: "forge:ingots/iron" },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
    output: { item: "industrialforegoing:machine_frame_simple", count: 1 },
    processingTime: 300,
  });

  event.custom({
    type: "industrialforegoing:dissolution_chamber",
    input: [
      { tag: "forge:plastic" },
      { tag: "industrialforegoing:machine_frame/simple" },
      { tag: "forge:plastic" },
      { item: "minecraft:netherite_scrap" },
      { item: "minecraft:netherite_scrap" },
      { tag: "forge:ingots/gold" },
      { tag: "forge:gears/diamond" },
      { tag: "forge:ingots/gold" },
    ],
    inputFluid: '{Amount:2000,FluidName:"industrialforegoing:latex"}',
    output: { item: "industrialforegoing:machine_frame_advanced", count: 1 },
    processingTime: 300,
  });

  event.custom({
    type: "industrialforegoing:dissolution_chamber",
    input: [
      { tag: "forge:plastic" },
      { tag: "industrialforegoing:machine_frame/advanced" },
      { tag: "forge:plastic" },
      { item: "minecraft:netherite_ingot" },
      { item: "minecraft:netherite_ingot" },
      { tag: "forge:gems/diamond" },
      { tag: "forge:gears/diamond" },
      { tag: "forge:gems/diamond" },
    ],
    inputFluid: '{Amount:4000,FluidName:"industrialforegoing:latex"}',
    output: { item: "industrialforegoing:machine_frame_supreme", count: 1 },
    processingTime: 300,
  });

  // 末地传送门框架 for 化学溶解室
  event.custom({
    type: "industrialforegoing:dissolution_chamber",
    input: [
      { item: "minecraft:iron_door" },
      { item: "minecraft:ender_eye" },
      { item: "thermal:obsidian_glass" },
      { item: "thermal:obsidian_glass" },
      { item: "thermal:obsidian_glass" },
      { item: "thermal:obsidian_glass" },
      { item: "minecraft:ender_eye" },
      { item: "minecraft:iron_door" },
    ],
    inputFluid: '{Amount:1000,FluidName:"thermal:ender"}',
    output: { item: "minecraft:end_portal_frame", count: 1 },
    processingTime: 800,
  });

  // 低级机器框架
  minecraft.crafting_shaped("industrialforegoing:machine_frame_pity", ["LIL", "IDI", "LIL"], {
    L: "#minecraft:logs",
    I: "minecraft:iron_ingot",
    D: "minecraft:diamond",
  });

  // 塑料片
  minecraft.crafting_shapeless("industrialforegoing:plastic", ["thermal:cured_rubber"]);
});
