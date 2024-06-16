ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  // 熔岩睡莲合成睡莲
  minecraft.crafting_shapeless("minecraft:lily_pad", ["ars_nouveau:lava_lily", "ars_nouveau:lava_lily"]);

  // 树苗合成泥土
  minecraft.crafting_shapeless("minecraft:dirt", [
    "#minecraft:saplings",
    "#minecraft:saplings",
    "#minecraft:saplings",
    "#minecraft:saplings",
  ]);

  // 魔源罐
  minecraft.crafting_shaped("ars_nouveau:source_jar", ["AAA", "A A", "AAA"], {
    A: "ars_nouveau:archwood_slab",
  });

  //灌注室
  minecraft.crafting_shaped("ars_nouveau:imbuement_chamber", ["ASA", "A A", "ASA"], {
    A: "ars_nouveau:archwood_planks",
    S: "ars_nouveau:source_jar",
  });

  // 火山通道
  minecraft.crafting_shaped("ars_nouveau:volcanic_sourcelink", ["BBB", "BRB", "BBB"], {
    R: "ars_nouveau:red_archwood_log",
    B: "minecraft:charcoal",
  });

  // 奥术基座
  minecraft.crafting_shaped("ars_nouveau:arcane_pedestal", [" S ", "CTC", "CCC"], {
    S: "ars_nouveau:source_gem",
    T: "ars_nouveau:sourcestone",
    C: "ars_nouveau:red_archwood_log",
  });

  // 奥术基座
  minecraft.crafting_shapeless("ars_nouveau:arcane_pedestal", ["ars_nouveau:arcane_platform"]);

  // 星宝石兽碎片
  minecraft.crafting_shaped("ars_nouveau:starbuncle_shards", ["GGG", "FSF", "GGG"], {
    G: "minecraft:gold_ingot",
    F: "reliquary:fertile_lily_pad",
    S: "ars_nouveau:source_berry",
  });

  // 创造魔源罐
  minecraft.crafting_shaped("ars_nouveau:creative_source_jar", ["PEO", "ESE", "OEP"], {
    E: "minecraft:nether_star",
    S: "ars_nouveau:source_jar",
    P: "mekanism:pellet_plutonium",
    O: "mekanism:pellet_polonium",
  });

  // 创造魔源罐
  minecraft.crafting_shapeless("2x ars_nouveau:creative_source_jar", ["ars_nouveau:creative_source_jar"]);

  // 魔源宝石
  minecraft.crafting_shapeless("4x ars_nouveau:source_gem", "ars_nouveau:source_gem_block");
});
