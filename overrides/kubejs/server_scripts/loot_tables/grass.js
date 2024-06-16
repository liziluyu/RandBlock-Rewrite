ServerEvents.blockLootTables(event => {
  event.addBlock('minecraft:grass', table => {
    table.addPool(pool => {//新建随机池(覆盖原有的)
      pool.rolls = 3 // 固定值
      pool.addItem('minecraft:carrot', 20)
      pool.addItem('minecraft:potato', 20)
      pool.addItem('minecraft:melon_seeds', 20)
      pool.addItem('minecraft:beetroot_seeds', 20)
      pool.addItem('minecraft:wheat_seeds', 20)
      pool.addItem('occultism:datura_seeds', 20)
      pool.addItem('thermal:flax_seeds', 20)
      pool.addItem('minecraft:pumpkin_seeds', 20)
      pool.addItem('thermal:rubberwood_sapling', 5)
    })
  })
})
