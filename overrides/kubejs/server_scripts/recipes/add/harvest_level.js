// 方块挖掘等级修改
ServerEvents.tags("block", (event) => {
  // 下届合金块
  event.remove("minecraft:needs_diamond_tool", "minecraft:netherite_block");
  event.add("minecraft:needs_iron_tool", "minecraft:netherite_block");
});
