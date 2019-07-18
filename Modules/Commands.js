const mysqlc = require('./mySql');

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

mp.events.addCommand(`doors`, 
	(player) => {
		let vehicle = player.vehicle;
		if (!!vehicle) {
			let newState = !vehicle.locked;
			vehicle.locked = newState;
			player.outputChatBox(`Your vehicle doors now <b>${newState ? `closed` : `opened`}</b>`);
		};
	}
);

mp.events.addCommand('dc', (player) => {
    mp.events.call('kickThePlayer', player);
});

mp.events.addCommand('ping', (player) => {
    let ping = player.ping;
    player.outputChatBox('Ping is currently ${ping} ms');
});


// Admin commands
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


mp.events.addCommand("weapon", (player, fullText, weapon, ammo) => {
	let weaponHash = mp.joaat(weapon);
    player.giveWeapon(weaponHash, parseInt(ammo) || 10000)
    player.outputChatBox('You were given ' + ammo +' of '+ weapon);
});

mp.events.addCommand('getpos',(player, fullText) => {
    player.outputChatBox(`${player.position}`);
    console.log(player.position);
});

mp.events.addCommand(`tp`, (player,fullText, x, y, z) => {
    if (x == undefined || y == undefined || z == undefined) {
        player.outputChatBox(`/tp [x] [y] [z]`);
        return;
    };
    var fx = parseFloat(x);
    var fy = parseFloat(y);
    var fz = parseFloat(z);
    console.log('${fx}, ${fy} ,${fz}');
    player.position = new mp.Vector3(fx,fy,fz);
    player.outputChatBox(`You've been teleported.`);
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


mp.events.addCommand('getrank',(player,fullText,pid) => {
    let name = player.name;
    let sql = 'SELECT rank FROM players WHERE name is ${name}';
    mysqlc.query(sql, function (err, result){
        if (err) {
            throw err;
        };
    });
});

mp.events.addCommand('getid',(player,fullText) => {

    
});

