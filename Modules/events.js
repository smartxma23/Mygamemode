mp.events.add(`playerChat`, (player, text) => {
    if (text == undefined){
        return;

 }
mp.players.broadcastInRange(player.position, 25, `${player.name}: ${text}`);
});


mp.events.add('kickThePlayer', (player) => {
    console.log(`Kicked: ${player.name}`);
    player.kick();
});

