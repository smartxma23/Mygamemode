mp.events.add(`playerChat`, (player, text) => {
    if (text == undefined){
        return;

 }
mp.players.broadcastInRange(player.position, 25, `${player.name}: ${text}`);
});

mp.events.add('playerJoin', (player) => {
    player.outputChatbox('Welcome to the server!');
    player.spawn(new mp.vector3(38, 16, 70));
});

mp.events.add('playerQuit', (player, exitType, reason) => {
    var currentVehicles = player.getVarible('PersonalVehicle');
    
    if (currentVehicle == null) return;

    currentVehicle.destroy();
});

mp.events.add('kickThePlayer', (player) => {
    console.log(`Kicked: ${player.name}`);
    player.kick();
});

