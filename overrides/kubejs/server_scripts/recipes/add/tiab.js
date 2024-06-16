ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  minecraft.crafting_shaped("tiab:time_in_a_bottle", [" S ", "SGS", "SSS"], {
    S: "ars_nouveau:sourcestone",
    G: "ars_nouveau:source_gem",
  });

  // 时间之瓶增加时间
  Ingredient.registerCustomIngredientAction("add_time", (itemStack, slot, inventory) => {
    let { nbt } = inventory.extractItem(inventory.find("tiab:time_in_a_bottle"), 1, false);
    nbt.storedTime += 36000;
    nbt.totalAccumulatedTime += 36000;

    return Item.of(itemStack).withNBT(nbt);
  });

  Ingredient.registerCustomIngredientAction("randblock:time_remnant", (itemStack, slot, inventory) => {
    let { nbt } = inventory.extractItem(inventory.find("tiab:time_in_a_bottle"), 1, false);

    return Item.of(itemStack).withNBT(nbt);
  });

  minecraft
    .crafting_shapeless("randblock:time_remnant", ["8x thermal:gold_coin", "tiab:time_in_a_bottle"])
    .customIngredientAction("tiab:time_in_a_bottle", "add_time");

  minecraft
    .crafting_shapeless("4x randblock:time_remnant", ["8x thermal:iron_coin", "tiab:time_in_a_bottle"])
    .customIngredientAction("tiab:time_in_a_bottle", "randblock:time_remnant");
});
