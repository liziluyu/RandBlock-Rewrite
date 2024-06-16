ServerEvents.entityLootTables(event => {
    event.addEntity('minecraft:wither_skeleton', table => {
      table.addPool(pool => {//新建随机池(覆盖原有的)
        pool.rolls = 3 // 固定值
        pool.addItem('minecraft:charcoal', 20)
        pool.addItem('minecraft:wither_skeleton_skull', 10)
        pool.addItem('minecraft:bone', 10)
      })
    })

    event.addEntity('occultism:wild_hunt_wither_skeleton', table => {
        table.addPool(pool => {//新建随机池(覆盖原有的)
          pool.rolls = 4 // 固定值
          pool.addItem('minecraft:charcoal', 20)
          pool.addItem('reliquary:withered_rib', 10)
          pool.addItem('minecraft:wither_skeleton_skull', 10)
          pool.addItem('minecraft:bone', 10)
        })
      })
  })
  