ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  // 自然祭坛
  event.custom({
    type: "naturesaura:tree_ritual",
    ingredients: [
      { item: "minecraft:stone" },
      { item: "minecraft:stone" },
      { item: "minecraft:stone" },
      { item: "naturesaura:gold_leaf" },
      { item: "create:brass_ingot" },
      { item: "naturesaura:token_joy" },
    ],
    sapling: { item: "minecraft:oak_sapling" },
    output: { item: "naturesaura:nature_altar" },
    time: 500,
  });

  // 金锭（森林仪式）
  event.custom({
    type: "naturesaura:tree_ritual",
    ingredients: [
      { item: "create:brass_ingot" },
      { item: "create:brass_ingot" },
      { item: "create:precision_mechanism" },
      { item: "create:precision_mechanism" },
      { item: "ars_nouveau:source_gem" },
      { item: "ars_nouveau:source_gem" },
    ],
    sapling: { item: "minecraft:oak_sapling" },
    output: { item: "minecraft:gold_ingot", count: 4 },
    time: 500,
  });

  // 金锭（自然祭坛）
  event.custom({
    type: "naturesaura:altar",
    input: { item: "minecraft:raw_gold" },
    output: { item: "minecraft:gold_ingot" },
    aura: 1500,
    time: 20,
  });

  // 金块（自然祭坛）
  event.custom({
    type: "naturesaura:altar",
    input: { item: "minecraft:raw_gold_block" },
    output: { item: "minecraft:gold_block" },
    aura: 3000,
    time: 20,
  });

  // 闪耀纤维
  minecraft.crafting_shaped("4x naturesaura:gold_fiber", ["MNM", "NGN", "MNM"], {
    M: "#minecraft:leaves",
    N: "create:brass_nugget",
    G: "minecraft:grass",
  });

  // 射击标靶
  minecraft.crafting_shaped("naturesaura:projectile_generator", ["GGG", "GTG", "GGG"], {
    T: "minecraft:target",
    G: "minecraft:golden_apple",
  });
});
