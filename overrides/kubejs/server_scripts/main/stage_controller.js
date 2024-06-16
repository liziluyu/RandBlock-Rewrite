/**
 * @param {number} stage
 */
function stageChangerEventHandle(stage) {
  ItemEvents.rightClicked(`randblock:stage_${stage}_controller`, (event) => {
    const { player, hand, item, server } = event;

    if (player.getItemInHand(hand).id !== item.id) return;

    updateServerStage(server, stage);
    server.persistentData.enable = true;
    server.tell([Text.translate("text.randblock.stage_change", [stage])]);
  });
}

// 不知道為啥用 for 迴圈會出錯，所以只好一個一個寫
stageChangerEventHandle(0);
stageChangerEventHandle(1);
stageChangerEventHandle(2);
stageChangerEventHandle(3);
stageChangerEventHandle(4);

/**
 * @param {Special.Item} item
 * @param {number} interval
 */
function intervalChangerEventHandle(item, interval) {
  ItemEvents.rightClicked(item, (event) => {
    const { player, hand, item, server } = event;

    if (player.getItemInHand(hand).id !== item.id) return;

    server.persistentData.blockReplacementInterval = interval;
    server.tell([Text.translate("text.randblock.set_interval", [interval])]);
  });
}

[
  ["randblock:stage_time_min", 30],
  ["randblock:stage_time_max", 1800],
  ["randblock:stage_time_master", 2],
].forEach(([item, interval]) => intervalChangerEventHandle(item, interval));

ItemEvents.rightClicked("randblock:stage_off", (event) => {
  const { player, hand, item, server } = event;

  if (player.getItemInHand(hand).id !== item.id) return;

  server.persistentData.enable = false;
  server.tell([Text.translate("text.randblock.randblock:stage_off")]);
});
