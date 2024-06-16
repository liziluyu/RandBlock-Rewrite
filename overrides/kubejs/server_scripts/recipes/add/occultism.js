ServerEvents.recipes((event) => {
  const { minecraft, occultism } = event.recipes;

  occultism.spirit_fire(Item.of("occultism:storage_stabilizer_tier3"), "ae2:item_storage_cell_16k");

  // 维度存储
  minecraft.smithing(
    "occultism:storage_controller",
    "occultism:storage_controller_base",
    "occultism:dimensional_matrix"
  );
});
