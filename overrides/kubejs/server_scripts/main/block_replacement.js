// priority: 50

const randomBlockPosRange = {
  max: [9, 68, 9],
  min: [6, 65, 6],
  flat_max: [9, 65, 9],
};
const stageBlocks = [stage0_blocks, stage1_blocks, stage2_blocks, stage3_blocks, stage4_blocks];

/**
 * @param {Internal.MinecraftServerKJS} server
 */
function resetServerData(server) {
  updateServerStage(server, 0);

  server.persistentData.enable = false;
  server.persistentData.stageBlockFlags = {
    stage_0: {
      oak_leaves: false,
      brown_mushroom_block: false,
      red_mushroom_block: false,
      beacon: false,
    },
    stage_1: {
      iron_ore: false,
    },
    stage_2: {
      gold_ore: false,
      lapis_ore: false,
      redstone_ore: false,
      glowstone: false
    },
  };
}

/**
 * @param {Internal.MinecraftServerKJS} server
 * @param {number} stage
 */
function updateServerStage(server, stage) {
  server.persistentData.stage = stage;
  server.persistentData.blockReplacementInterval = stage < 1 ? 1.5 * 60 : 3 * 60;
}

/**
 * @param {Internal.MinecraftServerKJS} server
 * @param {Special.Block} block
 */
function placeBlocks(server, block) {
  let { max, min } = randomBlockPosRange;

  if (/\{.+\}/.test(block)) max = randomBlockPosRange.flat_max;

  const command = `fill ${min.join(" ")} ${max.join(" ")} ${block}`;
  server.runCommandSilent(command);

  const id = Utils.id(block);
  const descriptionId = `block.${id.namespace}.${id.path}`;
  server.tell([Text.translate("text.randblock.block", [Text.translate(descriptionId).string])]);
}

// Initialize Server Data
ServerEvents.loaded((event) => {
  const { server } = event;

  if (server.persistentData.initialed) return;
  server.persistentData.initialed = true;

  resetServerData(server);
});



LevelEvents.tick("minecraft:overworld", (event) => {
  const {
    level,
    level: { time },
    server,
    server: { persistentData },
  } = event;

  if (!persistentData.enable) return;

  const remainingSecond =
    persistentData.blockReplacementInterval - ((time / 20) % persistentData.blockReplacementInterval);

  level.players.statusMessage = [Text.translate("text.randblock.block_time", [remainingSecond.toFixed()])];

  if (remainingSecond !== persistentData.blockReplacementInterval) return;

  console.log(`stage_${persistentData.stage}`);
  const flags = persistentData.stageBlockFlags[`stage_${persistentData.stage}`];

  if (flags !== undefined) {
    let localFlag = [false, null];
    for (let [key, value] of Object.entries(flags)) {
      if (!value) {
        localFlag[0] = true;
        localFlag[1] = key;
        persistentData.stageBlockFlags[`stage_${persistentData.stage}`][key] = true;
        break;
      }
    }
    if (localFlag[0]) {
      placeBlocks(server, localFlag[1]);
      return;
    }
  }

  const blocks = stageBlocks[persistentData.stage];

  placeBlocks(server, blocks[Utils.random.nextInt(blocks.length)]);
});
