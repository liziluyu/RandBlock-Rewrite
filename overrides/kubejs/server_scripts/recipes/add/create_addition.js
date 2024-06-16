ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;
  minecraft.crafting_shaped("createaddition:electric_motor", [" A ", "ECE", "EDE"], {
    A: "create:andesite_alloy",
    D: "powah:dielectric_paste",
    E: "powah:energy_cable_starter",
    C: "create:large_water_wheel",
  });
});
