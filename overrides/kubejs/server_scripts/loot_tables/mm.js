ServerEvents.blockLootTables(event =>{
    const mm_block = [
        'mm:ae2_quartz_creator_controller',
        'mm:wither_storm_controller',
        'mm:gold_rush_controller',
        'mm:glowstone_machine_controller',
        'mm:gaia_crusher_controller',
        'mm:enginmagic_linked_controller',
        'mm:maxwell_thermoelectric_generator_controller',
        'mm:item_output_port',
        'mm:energy_output_port',
        'mm:item_input_port',
        'mm:energy_input_port',
        'mm:fluid_input_port',
        'mm:fluid_output_port'
    ]

    mm_block.forEach(block =>{
        event.addBlock(block, table =>{
            table.addPool(pool =>{
                pool.rolls = 1
                pool.addItem(block)
            })
        })
    })
})