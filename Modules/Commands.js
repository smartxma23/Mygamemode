mp.events.addCommand('getpos',(player, fullText) => {
    player.outputChatBox(`${player.position}`);
});

mp.events.addCommand(`tp`, (player,fullText, x, y, z) => {
    if (x == undefined || y == undefined || z == undefined) {
        player.outputChatBox(`/tp [x] [y] [z]`);
        return;
    }

    player.outputChatBox(`You've been teleported.`);
    player.position = new mp.Vector3(parsefloat(x), parsefloat(y), parsefloat(z));
});
mp.events.addCommand('kill', (player) => {
    player.health = 0;
    player.outputChatBox(`/kill`);
    player.outputChatBox(`You have been killed.`);
});
mp.events.addCommand('hp', (player) => {
    if (player.health == 0) {
        pos = player.position;
        player.spawn(pos);
    };
    player.health = 100;
    player.outputChatBox(`respawned and healed`);
});
mp.events.addCommand('me',(player, fullText) => {
    if (fullText == undefined) {
       player.outputChatBox(`/me [message]`);
       return;
    }

    mp.players.broadcastInRange(player.position, 20, `!{#C6A6E0} ${player.name} ${fullText}`);
    // Smart opens the door.
});

mp.events.addCommand('do',(player, fullText) => {
    if (fullText == undefined) {
       player.outputChatBox(`/do [message]`);
       return;
    }

    mp.players.broadcastInRange(player.position, 20, `!{#C6A6E0} ${fullText} (( ${player.name} ))`);
   // The door would be open. (( Smart ))
   });

mp.events.addCommand('spawncar', (player, fullText, vehicleType) => {
    if (vehicleType == undefined) {
        player.outputChatBox('/spawncar [vehicle]');
        return;
    }
    
    var currentVehicle = player.getVariable('PersonalVehicle');
    
    if (currentVehicle != null){
        currentVehicle.destroy();
        player.outputChatBox('Vehicle was despawned');
    }
    
    var spawnedVehicle = mp.vehicles.new(mp .joaat(vehicleType), player.position, {color: [[255, 0, 0], [255, 0, 0]]});
    player.setVariable('PersonalVehicle', spawnedVehicle);
});

mp.events.addCommand('dc', (player) => {
    mp.events.call('kickThePlayer', player);
});

mp.events.addCommand("weapon", (player, fullText, weapon, ammo) => {
	let weaponHash = mp.joaat(weapon);
    player.giveWeapon(weaponHash, parseInt(ammo) || 10000)
    player.outputChatBox('You were given $(ammo) of $(weapon)');
});
/*
mp.events.addCommand('giveweapon', (player, fullText, abc, bcd) => {
    var hash = Number(abc);
    var ammo = Number(bcd);
    if (hash == undefined) or (ammo == undefined) {
        player.outputChatBox('/giveweapon [hash] [ammo]');
        return;
    };
    player.giveWeapon(hash, ammo);
}); 

mp.events.addcommand()
*/