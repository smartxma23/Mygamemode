const mysqlc = require('./mySql');
// Work in progress 
mp.events.add('playerReady', (player) => {
    player.dimension = 2 
    player.outputChatBox('Welcome to the server!');
    player.playAnimation('mp_arresting', 'idle', 1, 49)

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
        let sql = 'INSERT INTO player(name,password) Values (${name},${password})';
        mysqlc.query(sql, function (err, result){
            if (err) {
                throw err;
            };
        });
    };
});

mp.events.addCommand('login',(player,fullText,name,password) =>{
    if (name == undefined || password == undefined){
        player.outputChatBox('/login [name] [password]');
        return ;
    };
    let sql = 'SELECT name,password,position FROM players WHERE name is ${name}'
    mysqlc.query(sql, function (err, result){
        if (err) {
            throw err;
        };
    });
    if (result[0].password == password) {
        mp.events.call('playerSpawn',player);
        player.dimension = 0;
        let pos = result[0].position.split(',');
        player.position = new mp.Vector3(parseFloat(pos[0]),parseFloat(pos[1]),parseFloat(pos[2]));
        player.name = name ;
        let playerid = player.id;
        let sql = 'UPDATE players SET game_id = ${playerid} WHERE name = ${name};'
        mysqlc.query(sql, function (err, result){
            if (err) {
            throw err;
            };
        });

    };
});
