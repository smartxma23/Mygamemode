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

function playerSpawn(player) {
    player.outputChatBox('You have spawned.');
};
mp.events.add('playerSpawn', playerSpawn);

function playerQuit(player,exitType,reason){
    var currentVehicle = player.getVarible('PersonalVehicle');
    
    if (currentVehicle == null) return;

    currentVehicle.destroy();
    let currentpos = player.position;
    let x = currentpos.x.toString();
    let y = currentpos.y.toString();
    let z = currentpos.z.toString();
    name = player.name ;
    posstr = '${x},${y},${z}';
    let sql = 'UPDATE players SET position = ${posstr} WHERE name is ${name}'
    mysqlc.query(sql, function (err, result){
        if (err) {
            throw err;
        };
    });
};
mp.events.add('playerQuit', (player, exitType, reason))

mp.events.add("pointingStop", (player) => {
    player.stopAnimation();
});