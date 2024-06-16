// 盖亚屠宰场
MMEvents.structureRegistry((event) => {
  event.build("rb:gaia_crusher", {
    name: {
      translate: "mm.controller.gaia_crusher",
    },
    controllerId: "mm:gaia_crusher",
    layout: [
      ["KEEEEEK", "ELLLLLE", "ELLLLLE", "ELLLLLE", "ELLLLLE", "ELLLLLE", "ELLLLLE", "KEEMEEK"],
      ["BDEFEDB", "DG   GD", "E     E", "EH I JE", "EH I JE", "E     E", "DG   GD", "BDECEDB"],
      ["AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA"],
    ],
    key: {
      A: { type: "mm:block", block: "botania:shimmerrock" },
      B: { type: "mm:block", block: "botania:fabulous_pool" },
      D: { type: "mm:block", block: "botania:ghost_rail" },
      E: { type: "mm:block", block: "botania:bifrost_perm" },
      F: { type: "mm:port", port: "mm:item", input: false },
      G: { type: "mm:block", block: "botania:gaia_spreader" },
      H: { type: "mm:block", block: "industrialforegoing:mob_slaughter_factory" },
      I: { type: "mm:block", block: "botania:gaia_head" },
      J: { type: "mm:block", block: "botania:piston_relay" },
      K: { type: "mm:block", block: "botania:gaia_pylon" },
      L: { type: "mm:block", block: "botania:elf_glass" },
      M: { type: "mm:port", port: "mm:energy", input: true },
    },
  });
});

// 添加配方
MMEvents.recipes((event) => {
  event.build("rb:gaia_crusher", {
    duration: 50,
    structureId: "rb:gaia_crusher",
    name: {
      translate: "mm.butcher",
    },
    inputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:energy",
          amount: 400000,
        },
      },
    ],
    outputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "botania:life_essence",
          count: 16,
        },
      },
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "botania:gaia_head",
          count: 1,
        },
      },
    ],
  });
});
