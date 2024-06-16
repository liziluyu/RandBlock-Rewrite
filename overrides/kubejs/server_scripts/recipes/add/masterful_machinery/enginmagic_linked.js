// 科魔链接器
MMEvents.structureRegistry((event) => {
  event.build("rb:enginmagic_linked", {
    name: {
      translate: "mm.controller.enginmagic_linked",
    },
    controllerId: "mm:enginmagic_linked",
    layout: [
      ["     ", "  B  ", " DID ", "  B  ", "     "],
      ["  B  ", "     ", "D   D", "     ", "  B  "],
      ["  B  ", "     ", "D   D", "     ", "  B  "],
      ["  B  ", "     ", "D   D", "     ", "  B  "],
      ["     ", "  F  ", " GHC ", "  F  ", "     "],
      ["  B  ", "     ", "D   D", "     ", "  B  "],
      ["  B  ", "     ", "D   D", "     ", "  B  "],
      ["  B  ", "     ", "D   D", "     ", "  B  "],
      ["     ", "  B  ", " DED ", "  B  ", "     "],
    ],
    key: {
      B: { type: "mm:block", block: "botania:shimmerrock" },
      D: { type: "mm:block", block: "create:brass_casing" },
      E: { type: "mm:block", block: "mekanism:steel_casing" },
      F: { type: "mm:port", port: "mm:item", input: true },
      G: { type: "mm:port", port: "mm:item", input: false },
      H: { type: "mm:port", port: "mm:energy", input: true },
      I: { type: "mm:block", block: "botania:dragonstone_block" },
    },
  });
});

// 添加配方
MMEvents.recipes((event) => {
  event.build("rb:enginmagic_linked_gaia", {
    duration: 50,
    structureId: "rb:enginmagic_linked",
    name: {
      text: `${Text.translate("mm.link").getString()}`,
    },
    inputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "botania:life_essence",
          count: 4,
        },
      },
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "mekanism:ingot_steel",
          count: 4,
        },
      },
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:energy",
          amount: 50000,
        },
      },
    ],
    outputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "botania:gaia_ingot",
          count: 4,
        },
      },
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "mekanism:ingot_osmium",
          count: 4,
        },
      },
    ],
  });

  event.build("rb:enginmagic_linked_occ", {
    duration: 500,
    structureId: "rb:enginmagic_linked",
    name: {
      text: "链接中...",
    },
    inputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "botania:gaia_ingot",
          count: 1,
        },
      },
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "mekanism:steel_casing",
          count: 1,
        },
      },
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:energy",
          amount: 100000,
        },
      },
    ],
    outputs: [
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "occultism:dimensional_matrix",
          count: 1,
        },
      },
      {
        type: "mm:simple",
        ingredient: {
          type: "mm:item",
          item: "occultism:storage_controller_base",
          count: 1,
        },
      },
    ],
  });
});
