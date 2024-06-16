ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  minecraft.crafting_shaped("starbunclemania:fluid_sourcelink", ["SGB", "IMI", "BGS"], {
    M: "ars_nouveau:mycelial_sourcelink",
    S: "ars_nouveau:source_berry",
    B: "starbunclemania:source_fluid_bucket",
    G: "ars_nouveau:source_gem",
    I: "minecraft:gold_ingot",
  });
});
