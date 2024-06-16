ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  // 粘土球
  minecraft.crafting_shapeless("4x minecraft:clay_ball", ["minecraft:clay"]);

  // 方解石
  minecraft.crafting_shapeless("minecraft:calcite", ["ars_nouveau:sourcestone", "botania:mana_powder"]);

  // 粗金块
  minecraft.crafting_shapeless("minecraft:raw_gold_block", [
    "minecraft:raw_gold",
    "minecraft:raw_gold",
    "minecraft:raw_gold",
    "minecraft:raw_gold",
    "minecraft:raw_gold",
    "minecraft:raw_gold",
    "minecraft:raw_gold",
    "minecraft:raw_gold",
    "minecraft:raw_gold",
  ]);

  // 标靶
  minecraft.crafting_shaped("minecraft:target", [" G ", "GHG", " G "], {
    H: "minecraft:hay_block",
    G: "minecraft:gold_ingot",
  });

  // 鸡蛋
  minecraft.crafting_shaped("minecraft:egg", ["SSS", "SQS", "SSS"], {
    S: "minecraft:snowball",
    Q: "minecraft:quartz",
  });

  // 鸡刷怪蛋
  minecraft.crafting_shaped("minecraft:chicken_spawn_egg", ["MMM", "MEM", "MMM"], {
    E: "minecraft:egg",
    M: "botania:mana_powder",
  });

  // 僵尸刷怪蛋
  minecraft.crafting_shaped("minecraft:zombie_spawn_egg", ["III", "IEI", "III"], {
    E: "minecraft:egg",
    I: "minecraft:iron_ingot",
  });

  // 潜影贝刷怪蛋
  minecraft.crafting_shaped("minecraft:shulker_spawn_egg", ["III", "IEI", "III"], {
    E: "minecraft:egg",
    I: "minecraft:shulker_shell",
  });

  // 女巫刷怪蛋
  minecraft.crafting_shaped("minecraft:witch_spawn_egg", ["III", "IEI", "III"], {
    E: "minecraft:egg",
    I: "minecraft:dragon_breath",
  });

  // 下届之星
  minecraft.crafting_shapeless("9x minecraft:nether_star", "randblock:nether_star_block");

  // 箱子
  minecraft.crafting_shaped("4x minecraft:chest", ["LLL", "L L", "LLL"], {
    L: "#minecraft:logs",
  });

  // 蜘蛛网
  minecraft.crafting_shaped("minecraft:cobweb", ["S S", " S ", "S S"], {
    S: "minecraft:string",
  });

  // 末地水晶
  minecraft.crafting_shaped("minecraft:end_crystal", ["GGG", "GEG", "GIG"], {
    G: "minecraft:glass",
    E: "minecraft:ender_eye",
    I: "botania:gaia_ingot",
  });

  // 火药
  minecraft.crafting_shaped("4x minecraft:gunpowder", ["FFF", "FTF", "FFF"], {
    T: "randblock:time_remnant",
    F: "minecraft:flint",
  });

  //  粗金
  minecraft.crafting_shapeless("9x minecraft:raw_gold", "minecraft:raw_gold_block");

  // 雪球
  minecraft.crafting_shapeless("4x minecraft:snowball", "minecraft:snow_block");

  minecraft.smithing("occultism:storage_stabilizer_tier4", "occultism:storage_stabilizer_tier3", "ae2:singularity");
  // 粗铁烧铁粒
  minecraft.blasting("3x minecraft:iron_nugget", "minecraft:raw_iron");

  // 恶魂之泪
  minecraft.blasting("2x minecraft:ghast_tear", "minecraft:gunpowder");
});
