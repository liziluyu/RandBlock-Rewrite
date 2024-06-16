ServerEvents.recipes((event) => {
  const { minecraft } = event.recipes;

  minecraft.smelting("ae2:fluix_crystal", "ae2:charged_certus_quartz_crystal");
});
