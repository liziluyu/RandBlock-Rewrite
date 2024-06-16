// 荧石制造机
MMEvents.structureRegistry((event) => {
  event.build("rb:glowstone_machine", {
    name: {
      translate: "mm.controller.glowstone_machine",
    },
    controllerId: "mm:glowstone_machine",
    layout: [
      ["AAAAA", "AAAAA", "AAIAA", "AAAAA", "AAAAA"],
      ["ABBBA", "B   D", "B G H", "B   D", "ABBBA"],
      ["ABBBA", "B   D", "B   D", "B   D", "ABBBA"],
      ["ABBBA", "B D E", "BDDDC", "B D F", "ABBBA"],
      ["AAAAA", "AAAAA", "AAAAA", "AAAAA", "AAAAA"],
    ],
    key: {
      A: { type: "mm:block", block: "create:brass_casing" },
      B: { type: "mm:block", block: "minecraft:netherite_block" },
      D: { type: "mm:block", block: "botania:livingrock" },
      E: { type: "mm:port", port: "mm:item", input: true },
      F: { type: "mm:port", port: "mm:fluid", input: true },
      G: { type: "mm:block", block: "minecraft:piston" },
      H: { type: "mm:port", port: "mm:item", input: false },
      I: { type: "mm:port", port: "mm:energy", input: true },
    },
  });
});

// 添加配方
MMEvents.recipes((event) => {
  event.build("rb:glowstone_machine", {
    duration: 50,
    structureId: "rb:glowstone_machine",
    name: {
      translate: "mm.work",
    },
    inputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:sulfur",
          count: 2,
        },
      },
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:fluid",
          fluid: "thermal:glowstone",
          amount: 200,
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
        ingredient: {
          type: "mm:item",
          item: "minecraft:glowstone",
          count: 1,
        },
      },
    ],
  });
});
