// 凋零风暴
MMEvents.structureRegistry((event) => {
  event.build("rb:wither_storm_controller", {
    name: {
      translate: "mm.controller.wither_storm",
    },
    controllerId: "mm:wither_storm",
    layout: [
      ["AAACAAA", "BHBBBIB", "BBBJBBB"],
      ["AAAAAAA", "B GGG B", "BBBBBBB"],
      ["AAAAAAA", "BEDFDEB", "BBBBBBB"],
      ["AAAAAAA", "B  D  B", "BBBBBBB"],
      ["AAAAAAA", "BBBBBBB", "BBBBBBB"],
    ],
    key: {
      A: { type: "mm:block", block: "botania:mana_glass" },
      B: { type: "mm:block", block: "mekanism:structural_glass" },
      D: { type: "mm:block", block: "minecraft:soul_sand" },
      E: { type: "mm:block", block: "industrialforegoing:mob_crusher" },
      F: { type: "mm:block", block: "allthecompressed:soul_sand_block_1x" },
      G: { type: "mm:block", block: "minecraft:wither_skeleton_skull" },
      H: { type: "mm:port", port: "mm:item", input: false },
      I: { type: "mm:port", port: "mm:item", input: true },
      J: { type: "mm:port", port: "mm:energy", input: true },
    },
  });
});

// 添加配方
MMEvents.recipes((event) => {
  event.build("rb:wither_storm_controller", {
    duration: 50,
    structureId: "rb:wither_storm_controller",
    name: {
      translate: "mm.work",
    },
    inputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "minecraft:wither_skeleton_skull",
          count: 3,
        },
      },
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:energy",
          amount: 200000,
        },
      },
    ],
    outputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "minecraft:nether_star",
          count: 1,
        },
      },
    ],
  });
});
