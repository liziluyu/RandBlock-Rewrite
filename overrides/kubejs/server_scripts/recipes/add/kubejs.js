ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  minecraft.crafting_shapeless("randblock:nether_star_block", [
    "minecraft:nether_star",
    "minecraft:nether_star",
    "minecraft:nether_star",
    "minecraft:nether_star",
    "minecraft:nether_star",
    "minecraft:nether_star",
    "minecraft:nether_star",
    "minecraft:nether_star",
    "minecraft:nether_star",
  ]);

  // 非酋配方
  minecraft.crafting_shaped("minecraft:oak_leaves", ["TTT", "T T", "TTT"], {
    T: "randblock:time_remnant",
  });
  minecraft.crafting_shaped("minecraft:brown_mushroom_block", ["TTT", "TTT", " TT"], {
    T: "randblock:time_remnant",
  });
  minecraft.crafting_shaped("minecraft:red_mushroom_block", ["TTT", "TTT", "TT "], {
    T: "randblock:time_remnant",
  });

  minecraft.crafting_shaped("8x minecraft:iron_ingot", [" T ", "T T", " T "], {
    T: "randblock:time_remnant",
  });

  minecraft.crafting_shaped("16x minecraft:copper_ingot", ["T T", "   ", "T T"], {
    T: "randblock:time_remnant",
  });

  minecraft.crafting_shaped("4x minecraft:gold_ingot", ["T T", " T ", "T T"], {
    T: "randblock:time_remnant",
  });

  minecraft.crafting_shaped("randblock:time_remnant_pickaxe", ["TTT", " I ", " I "], {
    T: "randblock:time_remnant",
    I: "createaddition:iron_rod",
  });

  minecraft.crafting_shaped("minecraft:redstone_ore", ["TTT", "RRR", "TTT"], {
    T: "randblock:time_remnant",
    R: "minecraft:redstone",
  });
});
