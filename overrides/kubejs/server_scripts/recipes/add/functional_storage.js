ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  // 压缩抽屉
  minecraft.crafting_shaped("functionalstorage:compacting_drawer", ["SSS", "CEC", "SSS"], {
    S: "minecraft:stone",
    C: "minecraft:copper_ingot",
    E: "minecraft:chest",
  });

  // 抽取升级
  minecraft.crafting_shaped("functionalstorage:puller_upgrade", [" H ", " D ", "   "], {
    D: "#functionalstorage:drawer",
    H: "minecraft:hopper",
  });

  // 输出升级
  minecraft.crafting_shaped("functionalstorage:pusher_upgrade", [" D ", " H ", "   "], {
    D: "#functionalstorage:drawer",
    H: "minecraft:hopper",
  });

  // 抽屉
  minecraft.crafting_shaped("functionalstorage:oak_1", ["OOO", "OCO", "OOO"], {
    C: "#forge:chests",
    O: "minecraft:oak_planks",
  });

  minecraft.crafting_shaped("2x functionalstorage:oak_2", ["OCO", "OOO", "OCO"], {
    C: "#forge:chests",
    O: "minecraft:oak_planks",
  });

  minecraft.crafting_shaped("4x functionalstorage:oak_4", ["COC", "OOO", "COC"], {
    C: "#forge:chests",
    O: "minecraft:oak_planks",
  });
});
