StartupEvents.registry("item", (event) => {
  event.create("randblock:half_uncompleted_end_bucket");
  event.create("randblock:magic_scrap");
  event.create("randblock:diluent_dragon_breath");
  event.create("randblock:time_remnant").maxStackSize(64).glow(true).tooltip(Text.translate("tooltip.randblock.time_remnant"));

  for (let stage = 0; stage < 5; stage++) {
    event
      .create(`randblock:stage_${stage}_controller`)
      .rarity("EPIC")
      .fireResistant(true)
      .maxStackSize(1)
      .glow(true)
      .tooltip(Text.translate(`tooltip.randblock.stage${stage}`));
  }

  event
    .create("randblock:stage_time_min")
    .rarity("EPIC")
    .fireResistant(true)
    .maxStackSize(1)
    .tooltip(Text.translate("tooltip.randblock.stage_time_min"));
  event
    .create("randblock:stage_time_max")
    .rarity("EPIC")
    .fireResistant(true)
    .maxStackSize(1)
    .tooltip(Text.translate("tooltip.randblock.stage_time_max"));
  event
    .create("randblock:stage_time_master")
    .rarity("EPIC")
    .fireResistant(true)
    .maxStackSize(1)
    .tooltip(Text.translate("tooltip.randblock.stage_time_master"));
  event
    .create("randblock:stage_off")
    .rarity("EPIC")
    .fireResistant(true)
    .maxStackSize(1)
    .tooltip(Text.translate("tooltip.randblock.stage_off"));

  event.create("randblock:singularity_coal").texture("randblock:item/singularity_overlay").color(0, 0x000000);
  event.create("randblock:singularity_copper").texture("randblock:item/singularity_overlay").color(0, 0xff4500);
  event.create("randblock:singularity_iron").texture("randblock:item/singularity_overlay").color(0, 0xfaf0e6);
  event.create("randblock:singularity_gold").texture("randblock:item/singularity_overlay").color(0, 0xffd700);
  event.create("randblock:singularity_redstone").texture("randblock:item/singularity_overlay").color(0, 0xff0000);
  event.create("randblock:singularity_lapis_lazuli").texture("randblock:item/singularity_overlay").color(0, 0x00bfff);
  event.create("randblock:singularity_glowstone").texture("randblock:item/singularity_overlay").color(0, 0xffa500);
  event.create("randblock:singularity_diamond").texture("randblock:item/singularity_overlay").color(0, 0x1e90ff);
  event.create("randblock:singularity_enderium").texture("randblock:item/singularity_overlay").color(0, 0x0000cd);

  event
    .create("randblock:time_remnant_pickaxe")
    .maxDamage(3)
    .rarity("EPIC")
    .tooltip(Text.translate("tooltip.randblock.randblock:time_remnant_pickaxe"));
});
