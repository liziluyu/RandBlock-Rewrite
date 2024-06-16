// 世界合成
ServerEvents.recipes((event) => {
  // 岩浆变水
  event.custom({
    type: "lychee:item_inside",
    item_in: {
      item: "minecraft:netherite_block",
    },
    block_in: { blocks: ["minecraft:lava"] },
    post: {
      type: "place",
      block: "minecraft:water",
    },
  });

  // 魔源石
  event.custom({
    type: "lychee:block_interacting",
    item_in: {
      item: "ars_nouveau:source_gem",
    },
    block_in: "ars_nouveau:red_archwood_log",
    post: [
      {
        type: "place",
        block: "ars_nouveau:sourcestone",
      },
      {
        type: "drop_item",
        item: "minecraft:charcoal",
        contextual: {
          type: "chance",
          chance: 0.5,
        },
      },
    ],
  });

  // 下届合金块
  event.custom({
    type: "lychee:block_clicking",
    item_in: {
      item: "ars_nouveau:source_gem",
    },
    block_in: "minecraft:netherite_block",
    post: [
      {
        type: "drop_item",
        item: "minecraft:netherite_block",
      },
      {
        type: "drop_item",
        item: "ars_nouveau:source_gem",
        contextual: {
          type: "chance",
          chance: 0.5,
        },
      },
    ],
  });

  // 青色混凝土
  event.custom({
    type: "lychee:block_interacting",
    item_in: {
      item: "ars_nouveau:source_gem",
    },
    block_in: "minecraft:cyan_concrete",
    post: [
      {
        type: "drop_item",
        item: "minecraft:cyan_concrete",
      },
      {
        type: "prevent_default",
      },
    ],
  });

  // 铜锭
  event.custom({
    type: "lychee:block_interacting",
    item_in: {
      item: "minecraft:iron_ingot",
    },
    block_in: "minecraft:netherite_block",
    post: [
      {
        type: "drop_item",
        item: "minecraft:copper_ingot",
      },
      {
        type: "place",
        block: "minecraft:air",
      },
    ],
  });

  // 绝缘覆层
  event.custom({
    type: "lychee:block_crushing",
    item_in: [
      {
        item: "thermal:sawdust_block",
      },
      {
        item: "minecraft:lava_bucket",
      },
    ],
    post: [
      {
        type: "drop_item",
        item: "powah:dielectric_paste",
        count: 16,
      },
      {
        type: "drop_item",
        item: "minecraft:bucket",
        count: 1,
      },
    ],
  });

  // 沙子变粘土
  event.custom({
    type: "lychee:item_inside",
    item_in: {
      item: "minecraft:sand",
    },
    block_in: { blocks: ["minecraft:water"] },
    post: {
      type: "drop_item",
      item: "minecraft:clay",
    },
  });

  // 安山岩
  event.custom({
    type: "lychee:block_clicking",
    item_in: {
      item: "minecraft:copper_ingot",
    },
    block_in: "ars_nouveau:sourcestone",
    post: [
      {
        type: "place",
        block: "minecraft:andesite",
      },
      {
        type: "drop_item",
        item: "minecraft:copper_ingot",
        contextual: {
          type: "chance",
          chance: 0.5,
        },
      },
    ],
  });

  // 沙块 2x变海带、甘蔗、竹子、亚麻
  event.custom({
    type: "lychee:item_inside",
    item_in: {
      item: "allthecompressed:sand_block_2x",
    },
    block_in: { blocks: ["minecraft:water"] },
    post: [
      {
        type: "drop_item",
        item: "minecraft:kelp",
        count: 4,
      },
      {
        type: "drop_item",
        item: "minecraft:sugar_cane",
        count: 1,
      },
      {
        type: "drop_item",
        item: "minecraft:bamboo",
        count: 1,
      },
      {
        type: "drop_item",
        item: "thermal:flax",
        count: 4,
      },
    ],
  });

  // 水变不稳定红石
  event.custom({
    type: "lychee:item_inside",
    item_in: {
      item: "ars_nouveau:belt_of_unstable_gifts",
    },
    block_in: { blocks: ["minecraft:water"] },
    post: [
      {
        type: "place",
        block: "thermal:redstone_fluid",
      },
      {
        type: "drop_item",
        item: "ars_nouveau:belt_of_unstable_gifts",
      },
    ],
  });

  // 无暇的赛特斯母岩
  event.custom({
    type: "lychee:block_interacting",
    item_in: {
      item: "minecraft:diamond_block",
    },
    block_in: "ae2:flawed_budding_quartz",
    post: {
      type: "place",
      block: "ae2:flawless_budding_quartz",
    },
  });

  // 铁块
  event.custom({
    type: "lychee:block_interacting",
    item_in: {
      item: "ars_nouveau:source_gem_block",
    },
    block_in: "allthecompressed:gravel_block_1x",
    post: {
      type: "place",
      block: "minecraft:iron_block",
      contextual: {
        type: "chance",
        chance: 0.05,
      },
    },
  });

  // 铜块
  event.custom({
    type: "lychee:block_interacting",
    item_in: {
      item: "ars_nouveau:source_gem_block",
    },
    block_in: "allthecompressed:sand_block_1x",
    post: {
      type: "place",
      block: "minecraft:copper_block",
      contextual: {
        type: "chance",
        chance: 0.05,
      },
    },
  });

  // 橡树树苗
  event.custom({
    type: "lychee:block_interacting",
    item_in: {
      item: "randblock:time_remnant_pickaxe",
    },
    block_in: "minecraft:oak_leaves",
    post: [
      {
        type: "drop_item",
        item: "minecraft:oak_sapling",
        contextual: {
          type: "chance",
          chance: 0.5,
        },
      },
      {
        type: "place",
        block: "minecraft:air",
      },
    ],
  });

  // 棕色蘑菇
  event.custom({
    type: "lychee:block_interacting",
    item_in: {
      item: "randblock:time_remnant_pickaxe",
    },
    block_in: "minecraft:brown_mushroom_block",
    post: [
      {
        type: "drop_item",
        item: "minecraft:brown_mushroom",
        contextual: {
          type: "chance",
          chance: 0.5,
        },
      },
      {
        type: "place",
        block: "minecraft:air",
      },
    ],
  });

  // 红色蘑菇
  event.custom({
    type: "lychee:block_interacting",
    item_in: {
      item: "randblock:time_remnant_pickaxe",
    },
    block_in: "minecraft:red_mushroom_block",
    post: [
      {
        type: "drop_item",
        item: "minecraft:red_mushroom",
        contextual: {
          type: "chance",
          chance: 0.5,
        },
      },
      {
        type: "place",
        block: "minecraft:air",
      },
    ],
  });
});
