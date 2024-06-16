ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  minecraft.crafting_shaped("mm:fluid_input_port", ["MBM", "EFE", "MMM"], {
    M: "ars_nouveau:magebloom_fiber",
    B: "minecraft:bucket",
    F: "mekanism:basic_fluid_tank",
    E: "minecraft:ender_pearl",
  });

  minecraft.crafting_shaped("mm:fluid_output_port", ["MMM", "EFE", "MBM"], {
    M: "ars_nouveau:magebloom_fiber",
    B: "minecraft:bucket",
    F: "mekanism:basic_fluid_tank",
    E: "minecraft:ender_pearl",
  });

  minecraft.crafting_shaped("mm:item_input_port", ["MHM", "ECE", "MMM"], {
    M: "ars_nouveau:magebloom_fiber",
    H: "minecraft:hopper",
    C: "minecraft:chest",
    E: "minecraft:ender_pearl",
  });

  minecraft.crafting_shaped("mm:item_output_port", ["MMM", "ECE", "MHM"], {
    M: "ars_nouveau:magebloom_fiber",
    H: "minecraft:hopper",
    C: "minecraft:chest",
    E: "minecraft:ender_pearl",
  });

  minecraft.crafting_shaped("mm:energy_input_port", ["MCM", "ESE", "MMM"], {
    M: "ars_nouveau:magebloom_fiber",
    C: "powah:energy_cable_basic",
    S: "powah:energy_cell_basic",
    E: "minecraft:ender_pearl",
  });

  minecraft.crafting_shaped("mm:energy_output_port", ["MMM", "ESE", "MCM"], {
    M: "ars_nouveau:magebloom_fiber",
    C: "powah:energy_cable_basic",
    S: "powah:energy_cell_basic",
    E: "minecraft:ender_pearl",
  });

  // 荧石制造机
  minecraft.crafting_shaped("mm:glowstone_machine_controller", ["GHG", "HBH", "GHG"], {
    B: "create:brass_casing",
    G: "allthecompressed:glowstone_block_1x",
    H: "minecraft:glowstone",
  });

  // 赛特斯石英生成器
  minecraft.crafting_shaped("mm:ae2_quartz_creator_controller", ["GMG", "MBM", "GMG"], {
    B: "create:brass_casing",
    G: "ae2:certus_quartz_crystal",
    M: "botania:mana_diamond",
  });

  // 科魔链接器
  minecraft.crafting_shaped("mm:enginmagic_linked_controller", ["RLD", "LBL", "DLR"], {
    B: "create:brass_casing",
    L: "botania:life_essence",
    R: "mekanism:enriched_redstone",
    D: "mekanism:enriched_diamond",
  });

  // 盖亚屠宰场
  minecraft.crafting_shaped("mm:gaia_crusher_controller", ["HGH", "GCG", "HGH"], {
    C: "create:brass_casing",
    G: "botania:gaia_ingot",
    H: "botania:gaia_head",
  });

  // 凋零风暴
  minecraft.crafting_shaped("mm:wither_storm_controller", ["GGG", "GCG", "GGG"], {
    C: "minecraft:nether_star",
    G: "minecraft:netherite_ingot",
  });

  // 淘金器
  minecraft.crafting_shaped("mm:gold_rush_controller", ["IGI", "GBG", "IGI"], {
    B: "create:brass_casing",
    I: "thermal:iron_coin",
    G: "thermal:gold_coin",
  });
});
