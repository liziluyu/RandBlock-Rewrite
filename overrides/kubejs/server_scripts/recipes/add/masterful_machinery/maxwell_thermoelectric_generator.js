// 麦克斯韦温差发电机
MMEvents.structureRegistry((event) => {
  event.build("rb:maxwell_thermoelectric_generator", {
    name: {
      translate: "mm.controller.maxwell_thermoelectric_generator",
    },
    controllerId: "mm:maxwell_thermoelectric_generator",
    layout: [
      ["AAAAAAA", "AHHHHHA", "AH   HA", "AH   HA", "AH   HA", "AHHHHHA", "AAAAAAA"],
      ["AAAAAAA", "ABBDEEA", "ABFFFEA", "ABFFFEA", "ABFFFEA", "ABBDEEA", "AAAAAAA"],
      ["AAAAAAA", "ABBDEEA", "ABFFFEA", "ABFFFEA", "ABFFFEA", "ABBDEEA", "AAAAAAA"],
      ["AAAAAAA", "ABBDEEA", "ABFFFEA", "ABFFFEA", "ABFFFEA", "ABBDEEA", "AAAAAAA"],
      ["AAAAAAA", "ABBDEEA", "ABFFFEA", "CBFFFEG", "ABFFFEA", "ABBDEEA", "AAAAAAA"],
      ["AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA"],
    ],
    key: {
      A: { type: "mm:block", block: "randblock:nether_star_block" },
      B: { type: "mm:block", block: "thermal:ender_fluid" },
      D: { type: "mm:block", block: "ars_nouveau:archwood_fence_gate" },
      E: { type: "mm:block", block: "minecraft:lava" },
      F: { type: "mm:block", block: "powah:reactor_nitro" },
      G: { type: "mm:port", port: "mm:energy", input: false },
      H: { type: "mm:block", block: "ae2:quartz_glass" },
    },
  });
});

// 添加配方
MMEvents.recipes((event) => {
  event.build("rb:maxwell_thermoelectric_generator", {
    duration: 1,
    structureId: "rb:maxwell_thermoelectric_generator",
    name: {
      translate: "mm.work",
    },
    inputs: [
      // {
      //   type: "mm:simple",
      //   ingredient: {
      //     type: "mm:item",
      //     item: "minecraft:nether_star",
      //     count: 1,
      //   },
      // },
    ],
    outputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:energy",
          amount: 5000000,
        },
      },
    ],
  });
});
