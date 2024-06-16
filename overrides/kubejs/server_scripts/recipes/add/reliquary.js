ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  // 睡莲合成富饶莲叶
  minecraft.crafting_shapeless("reliquary:fertile_lily_pad", [
    "minecraft:lily_pad",
    "minecraft:lily_pad",
    "minecraft:lily_pad",
    "minecraft:lily_pad",
  ]);
});
