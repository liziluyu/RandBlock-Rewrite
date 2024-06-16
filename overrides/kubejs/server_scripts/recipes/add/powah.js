ServerEvents.recipes((event) => {
  const { minecraft, powah } = event.recipes;

  // 能量线缆（初级）
  minecraft.crafting_shaped("8x powah:energy_cable_starter", ["DDD", "IMI", "DDD"], {
    D: "powah:dielectric_rod_horizontal",
    I: "minecraft:iron_ingot",
    M: "botania:mana_powder",
  });

  // 光伏板
  minecraft.crafting_shaped("3x powah:photoelectric_pane", ["DCD", "CGC", "DCD"], {
    C: "minecraft:copper_ingot",
    D: "powah:dielectric_paste",
    G: "minecraft:glass_pane",
  });

  // 太阳能板 初级
  minecraft.crafting_shaped("powah:solar_panel_starter", ["PPP", "MDM", "III"], {
    P: "powah:photoelectric_pane",
    M: "botania:mana_powder",
    D: "powah:dielectric_casing",
    I: "powah:dielectric_paste",
  });

  // 充能棒 下届
  minecraft.crafting_shaped("powah:energizing_rod_nitro", [" Q ", "CDC", " E "], {
    Q: "#c:quartz_blocks",
    C: "powah:capacitor_nitro",
    D: "powah:dielectric_casing",
    E: "powah:energizing_rod_basic",
  });

  // 热力发电机 下届
  minecraft.crafting_shaped("powah:thermo_generator_nitro", ["DCD", "ABA", "TPT"], {
    D: "powah:dielectric_paste",
    C: "powah:crystal_nitro",
    A: "powah:capacitor_nitro",
    B: "powah:dielectric_casing",
    T: "powah:thermoelectric_plate",
    P: "powah:thermo_generator_basic",
  });

  // 反应堆 下届
  minecraft.crafting_shaped("4x powah:reactor_nitro", ["SAS", "AUA", "SAS"], {
    A: "powah:capacitor_nitro",
    U: "powah:uraninite",
    S: "mekanism:steel_casing",
  });

  // 奇点制作
  powah.energizing(
    [
      "thermal:enderium_coin",
      "allthecompressed:coal_block_3x",
      "allthecompressed:coal_block_3x",
      "allthecompressed:coal_block_3x",
      "allthecompressed:coal_block_3x",
    ],
    "randblock:singularity_coal",
    800000000
  );
  powah.energizing(
    [
      "thermal:enderium_coin",
      "allthecompressed:copper_block_3x",
      "allthecompressed:copper_block_3x",
      "allthecompressed:copper_block_3x",
    ],
    "randblock:singularity_copper",
    800000000
  );
  powah.energizing(
    [
      "thermal:enderium_coin",
      "allthecompressed:iron_block_3x",
      "allthecompressed:iron_block_3x",
      "allthecompressed:iron_block_3x",
    ],
    "randblock:singularity_iron",
    800000000
  );
  powah.energizing(
    [
      "thermal:enderium_coin",
      "allthecompressed:gold_block_3x",
      "allthecompressed:gold_block_3x",
      "allthecompressed:gold_block_3x",
    ],
    "randblock:singularity_gold",
    800000000
  );
  powah.energizing(
    [
      "thermal:enderium_coin",
      "allthecompressed:redstone_block_3x",
      "allthecompressed:redstone_block_3x",
      "allthecompressed:redstone_block_3x",
    ],
    "randblock:singularity_redstone",
    800000000
  );
  powah.energizing(
    [
      "thermal:enderium_coin",
      "allthecompressed:lapis_block_3x",
      "allthecompressed:lapis_block_3x",
      "allthecompressed:lapis_block_3x",
    ],
    "randblock:singularity_lapis_lazuli",
    800000000
  );
  powah.energizing(
    ["thermal:enderium_coin", "allthecompressed:glowstone_block_3x", "allthecompressed:glowstone_block_3x"],
    "randblock:singularity_glowstone",
    800000000
  );
  powah.energizing(
    ["thermal:enderium_coin", "allthecompressed:diamond_block_3x"],
    "randblock:singularity_diamond",
    800000000
  );

  // 麦克斯韦温差发电机
  powah.energizing(
    ["mekanism:pellet_polonium", "mekanism:pellet_polonium", "mekanism:pellet_plutonium", "mekanism:pellet_plutonium"],
    "mm:maxwell_thermoelectric_generator_controller",
    8000000
  );
});
