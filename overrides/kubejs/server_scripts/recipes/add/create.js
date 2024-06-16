ServerEvents.recipes((event) => {
  const { create, minecraft } = event.recipes;

  // 搅拌盆搅拌黄铜
  create
    .mixing("3x create:brass_ingot", ["minecraft:copper_ingot", "create:andesite_alloy", "ars_nouveau:source_gem"])
    .heated();

  // 铁矿增产
  create
    .mixing(
      ["2x minecraft:iron_ore", Item.of("minecraft:experience_bottle").withChance(0.75)],
      ["minecraft:iron_ore", "ars_nouveau:source_gem"]
    )
    .heated();

  // 充能荧石
  create
    .mixing(Fluid.of("thermal:glowstone", 1000), ["minecraft:golden_carrot", Fluid.of("minecraft:water", 1000)])
    .heated();

  // 稀释龙息
  create
    .mixing([Fluid.of("randblock:diluent_dragon_breath", 500)], ["minecraft:dragon_breath", Fluid.water(250)])
    .superheated();

  // 牛奶
  create
    .mixing(
      [Fluid.of("minecraft:milk", 100)],
      [Fluid.of("starbunclemania:source_fluid", 1000), Fluid.of("create:chocolate", 100)]
    )
    .heated();

  // 石英
  create.filling("minecraft:quartz", ["minecraft:snow_block", Fluid.water(200)]);

  // 烘焙蛋糕底座
  create.filling("createaddition:cake_base_baked", ["createaddition:cake_base", Fluid.lava(400)]);

  // 稀释龙息
  create.filling("randblock:diluent_dragon_breath", [
    "minecraft:glass_bottle",
    Fluid.of("randblock:diluent_dragon_breath", FluidAmounts.BOTTLE),
  ]);

  // 蛋糕底座
  create.compacting("createaddition:cake_base", ["minecraft:egg", "minecraft:wheat", "minecraft:stone"]);

  // 液态六氟化铀
  create.emptying([Fluid.of("mekanism:uranium_hexafluoride", 200)], "ae2:matter_ball");

  let inter;
  // 铁自动化
  inter = "minecraft:raw_iron";
  create
    .sequenced_assembly(["minecraft:iron_ingot"], "minecraft:raw_iron", [
      create.filling(inter, ["minecraft:raw_iron", Fluid.lava(200)]),
      create.pressing(inter, inter),
      create.deploying(inter, [inter, "thermal:chiller_ingot_cast"]).keepHeldItem(),
      create.filling(inter, [inter, Fluid.water(200)]),
    ])
    .transitionalItem(inter)
    .loops(1);

  // 精密构建
  inter = "create:brass_sheet";
  create
    .sequenced_assembly(["create:precision_mechanism"], "create:brass_sheet", [
      create.deploying(inter, ["create:brass_sheet", "create:cogwheel"]),
      create.deploying(inter, [inter, "create:large_cogwheel"]),
      create.deploying(inter, [inter, "minecraft:iron_nugget"]),
    ])
    .transitionalItem(inter)
    .loops(2);

  // 末影珍珠
  inter = "minecraft:cyan_concrete";
  create
    .sequenced_assembly(["minecraft:ender_pearl"], "minecraft:cyan_concrete", [
      create.filling(inter, ["minecraft:cyan_concrete", Fluid.lava(200)]),
      create.pressing(inter, inter),
      create.filling(inter, [inter, Fluid.lava(200)]),
      create.deploying(inter, [inter, "thermal:chiller_ball_cast"]).keepHeldItem(),
      create.filling(inter, [inter, Fluid.water(200)]),
      create.filling(inter, [inter, Fluid.of("thermal:ender", 250)]),
    ])
    .transitionalItem(inter)
    .loops(1);

  // 谐振末影桶
  inter = "thermal:redstone_bucket";
  create
    .sequenced_assembly(["2x randblock:half_uncompleted_end_bucket"], "thermal:redstone_bucket", [
      create.deploying(inter, ["thermal:redstone_bucket", "minecraft:cyan_concrete"]),
      create.deploying(inter, [inter, "ars_nouveau:source_gem"]),
      create.pressing(inter, inter),
      create.cutting("2x randblock:half_uncompleted_end_bucket", inter).processingTime(40),
    ])
    .transitionalItem(inter)
    .loops(1);

  // 烈焰棒
  inter = "minecraft:stick";
  create
    .sequenced_assembly(["minecraft:blaze_rod"], "minecraft:stick", [
      create.filling(inter, ["minecraft:stick", Fluid.lava(200)]),
      create.deploying(inter, [inter, "thermal:chiller_rod_cast"]).keepHeldItem(),
    ])
    .transitionalItem(inter)
    .loops(1);

  // 创造AE
  inter = "ae2:item_storage_cell_256k";
  create
    .sequenced_assembly(["ae2:creative_item_cell"], "ae2:item_storage_cell_256k", [
      create.deploying(inter, ["ae2:item_storage_cell_256k", "ae2:smooth_sky_stone_block"]),
      create.deploying(inter, [inter, "thermal:cured_rubber"]),
      create.deploying(inter, [inter, "randblock:singularity_coal"]).keepHeldItem(),
      create.deploying(inter, [inter, "ars_nouveau:source_gem"]),
      create.deploying(inter, [inter, "randblock:singularity_copper"]).keepHeldItem(),
      create.deploying(inter, [inter, "ars_nouveau:sourcestone"]),
      create.deploying(inter, [inter, "randblock:singularity_iron"]).keepHeldItem(),
      create.deploying(inter, [inter, "allthecompressed:quartz_block_1x"]),
      create.deploying(inter, [inter, "randblock:singularity_gold"]).keepHeldItem(),
      create.deploying(inter, [inter, "botania:livingrock"]),
      create.deploying(inter, [inter, "randblock:singularity_redstone"]).keepHeldItem(),
      create.deploying(inter, [inter, "botania:livingwood_log"]),
      create.deploying(inter, [inter, "randblock:singularity_lapis_lazuli"]).keepHeldItem(),
      create.deploying(inter, [inter, "botania:gaia_ingot"]),
      create.deploying(inter, [inter, "randblock:singularity_glowstone"]).keepHeldItem(),
      create.deploying(inter, [inter, "randblock:nether_star_block"]),
      create.deploying(inter, [inter, "randblock:singularity_diamond"]).keepHeldItem(),
      create.deploying(inter, [inter, "minecraft:netherite_ingot"]),
      create.deploying(inter, [inter, "randblock:singularity_enderium"]).keepHeldItem(),
      create.deploying(inter, [inter, "mekanism:pellet_polonium"]),
    ])
    .transitionalItem(inter)
    .loops(256);

  // 末影奇点
  inter = "thermal:enderium_coin";
  create
    .sequenced_assembly(["randblock:singularity_enderium"], "thermal:enderium_coin", [
      create.deploying(inter, ["thermal:enderium_coin", "thermal:lumium_block"]),
      create.deploying(inter, [inter, "thermal:signalum_block"]),
      create.deploying(inter, [inter, "thermal:enderium_block"]),
    ])
    .transitionalItem(inter)
    .loops(128);

  // 空烈焰人燃烧室
  minecraft.crafting_shaped("create:empty_blaze_burner", [" I ", "IRI", " I "], {
    I: "create:iron_sheet",
    R: "ars_nouveau:red_archwood_log",
  });

  // 烈焰人燃烧室
  minecraft.crafting_shaped("create:blaze_burner", ["MMM", "FEF", "MMM"], {
    M: "botania:mana_powder",
    E: "create:empty_blaze_burner",
    F: "minecraft:flint_and_steel",
  });

  // 创造马达
  minecraft.crafting_shapeless("2x create:creative_motor", ["create:creative_motor"]);

  // 无法破坏砂纸
  minecraft.crafting_shaped(Item.of("create:sand_paper", "{Damage:0,Unbreakable:1b}"), ["QQQ", "QSQ", "QQQ"], {
    Q: "ae2:charged_certus_quartz_crystal",
    S: "create:sand_paper",
  });
});
