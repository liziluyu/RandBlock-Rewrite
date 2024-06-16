// 荧石制造机
MMEvents.structureRegistry((event) => {
  event.build("rb:gold_rush", {
    name: {
      translate: "mm.controller.gold_rush",
    },
    controllerId: "mm:gold_rush",
    layout: [
      ["AAAAA", "AAAAA", "AAJAA", "AAAAA", "AAAAA"],
      ["ABBBA", "BIIIB", "BIIIB", "BIIIB", "ABBBA"],
      ["ABEBA", "BFFFB", "GFFFH", "BFFFB", "ABCBA"],
      ["ABBBA", "BDDDB", "BDDDB", "BDDDB", "ABBBA"],
      ["AAAAA", "ABBBA", "ABBBA", "ABBBA", "AAAAA"],
    ],
    key: {
      A: { type: "mm:block", block: "create:andesite_casing" },
      B: { type: "mm:block", block: "minecraft:glass" },
      D: { type: "mm:block", block: "minecraft:water" },
      E: { type: "mm:port", port: "mm:item", input: false },
      F: { type: "mm:block", block: "minecraft:cobweb" },
      G: { type: "mm:port", port: "mm:fluid", input: true },
      H: { type: "mm:port", port: "mm:item", input: true },
      I: { type: "mm:block", block: "minecraft:sand" },
      J: { type: "mm:port", port: "mm:energy", input: true },
    },
  });
});

// 添加配方
MMEvents.recipes((event) => {
  event.build("rb:gold_rush", {
    duration: 50,
    structureId: "rb:gold_rush",
    name: {
      translate: "mm.work",
    },
    inputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "minecraft:sand",
          count: 4,
        },
      },
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:fluid",
          fluid: "minecraft:water",
          amount: 2000,
        },
      },
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:energy",
          amount: 2000,
        },
      },
    ],
    outputs: [
      {
        type: "mm:simple",
        chance: 0.02,
        ingredient: {
          type: "mm:item",
          item: "thermal:copper_coin",
          count: 1,
        },
      },
    ],
  });
});
