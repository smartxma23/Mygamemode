const mysqlc = require('./mySql');
// Work in progress 
mp.events.add('playerReady', (player) => {
    player.outputChatBox('Welcome to the server!');
    player.playAnimation('mp_arresting', 'idle', 1, 49)

});

mp.events.add('playerQuit', (player, exitType, reason) => {
    var currentVehicles = player.getVarible('PersonalVehicle');
    
    if (currentVehicle == null) return;

    currentVehicle.destroy();
});
// Work in progress
mp.events.addCommand("register", (player, fullText, name, passone, passtwo) => {
	if (name == undefined || passone == undefined || passtwo == undefined){
        player.outputChatBox('/register [name] [password] [password]');
        return;
    };
    if (passone == passtwo){
        player.outputChatBox('You have successfully created a new character.');
        player.outputChatBox('Use /login [name] [password] to start playing');
        sql = 'INSERT INTO player(name,password) Values (${name},${password})';
        mysqlc.query(sql, function (err, result){
            if (err) {
                throw err;
            });
    };
});

