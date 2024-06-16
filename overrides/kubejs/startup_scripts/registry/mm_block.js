// 控制器注册
MMEvents.controllerRegistry((event) => {
  event.create("glowstone_machine").name("荧石制造机").build();
  event.create("ae2_quartz_creator").name("赛特斯石英生成器").build();
  event.create("enginmagic_linked").name("科魔链接器").build();
  event.create("gaia_crusher").name("盖亚屠宰场").build();
  event.create("wither_storm").name("凋零风暴").build();
  event.create("maxwell_thermoelectric_generator").name("麦克斯韦温差发电机").build();
  event.create("gold_rush").name("淘金器").build();
});

// 交互口注册
MMEvents.portRegistry((event) => {
  event
    .create("item_input")
    .name("谐振物品")
    .input(true)
    .port("mm:item")
    .config({
      slotRows: 3,
      slotCols: 3,
    })
    .build();

  event
    .create("item_output")
    .name("谐振物品")
    .input(false)
    .port("mm:item")
    .config({
      slotRows: 3,
      slotCols: 3,
    })
    .build();

  event
    .create("fluid_input")
    .name("谐振流体")
    .input(true)
    .port("mm:fluid")
    .config({
      capacity: 4000,
    })
    .build();

  event
    .create("fluid_output")
    .name("谐振流体")
    .input(false)
    .port("mm:fluid")
    .config({
      capacity: 4000,
    })
    .build();

  event
    .create("energy_input")
    .name("谐振能量")
    .input(true)
    .port("mm:energy")
    .config({
      capacity: 1000000,
    })
    .build();

  event
    .create("energy_output")
    .name("谐振能量")
    .input(false)
    .port("mm:energy")
    .config({
      capacity: 100000000,
    })
    .build();
});
