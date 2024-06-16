// 赛特斯石英生成器
MMEvents.structureRegistry((event) => {
  event.build("rb:ae2_quartz_creator", {
    name: {
      translate: "mm.controller.ae2_quartz_creator",
    },
    controllerId: "mm:ae2_quartz_creator",
    layout: [
      ["AAA", "AFA", "AAA"],
      ["ABA", "ADC", "AEA"],
      ["AAA", "AAA", "AAA"],
    ],
    key: {
      A: { type: "mm:block", block: "create:brass_casing" },
      B: { type: "mm:port", port: "mm:item", input: false },
      D: { type: "mm:block", block: "ae2:flawless_budding_quartz" },
      E: { type: "mm:port", port: "mm:fluid", input: true },
      F: { type: "mm:port", port: "mm:energy", input: true },
    },
  });
});

// 添加配方
MMEvents.recipes((event) => {
  event.build("rb:ae2_quartz_creator", {
    duration: 50,
    structureId: "rb:ae2_quartz_creator",
    name: {
      translate: "mm.work",
    },
    inputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:fluid",
          fluid: "minecraft:water",
          amount: 1000,
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
          item: "ae2:quartz_block",
          count: 1,
        },
      },
    ],
  });
});
