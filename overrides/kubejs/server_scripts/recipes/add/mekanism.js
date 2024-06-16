ServerEvents.recipes((event) => {
  const { mekanism, minecraft } = event.recipes;

  // 钚靶丸
  event.custom({
    type: "mekanism:reaction",
    duration: 100,
    fluidInput: {
      amount: 1000,
      tag: "minecraft:water",
    },
    gasInput: {
      amount: 10,
      gas: "mekanism:polonium",
    },
    gasOutput: {
      amount: 10,
      gas: "mekanism:spent_nuclear_waste",
    },
    itemInput: {
      ingredient: {
        tag: "forge:dusts/fluorite",
      },
    },
    itemOutput: {
      item: "mekanism:pellet_polonium",
    },
  });

  // 陨石
  event.custom({
    type: "mekanism:painting",
    chemicalInput: {
      amount: 64,
      pigment: "mekanism:black",
    },
    itemInput: {
      ingredient: {
        type: "forge:difference",
        base: { item: "ars_nouveau:sourcestone" },
        subtracted: { item: "ae2:sky_stone_block" },
      },
    },
    output: { item: "ae2:sky_stone_block" },
  });

  // 龙息
  event.custom({
    type: "mekanism:painting",
    chemicalInput: {
      amount: 16,
      pigment: "mekanism:purple",
    },
    itemInput: {
      ingredient: {
        type: "forge:difference",
        base: { item: "randblock:diluent_dragon_breath" },
        subtracted: { item: "minecraft:dragon_breath" },
      },
    },
    output: { item: "minecraft:dragon_breath" },
  });

  // 魔法碎片
  mekanism.combining("randblock:magic_scrap", "minecraft:prismarine_shard", "botania:gaia_ingot");

  // 流明信素末影
  mekanism.combining("thermal:lumium_ingot", "thermal:tin_ingot", "ars_nouveau:sconce");
  mekanism.combining("thermal:signalum_ingot", "thermal:silver_ingot", "ars_nouveau:sconce");
  mekanism.combining("thermal:enderium_ingot", "thermal:lead_ingot", "ars_nouveau:sconce");
  // 钢制机壳
  minecraft.crafting_shaped("mekanism:steel_casing", ["IGI", "GOG", "IGI"], {
    I: "mekanism:ingot_steel",
    O: "mekanism:ingot_osmium",
    G: "botania:gaia_ingot",
  });

  // 公式装配器
  minecraft.crafting_shaped("mekanism:formulaic_assemblicator", [" C ", "GMG", "IFI"], {
    M: "thermal:machine_frame",
    C: "minecraft:crafting_table",
    G: "minecraft:gold_ingot",
    I: "thermal:copper_gear",
    F: "mekanism:crafting_formula",
  });

  //  合成公式
  minecraft.crafting_shapeless("mekanism:crafting_formula", ["minecraft:paper", "botania:mana_powder"]);
});
