// Create Connection
var mysql = require('mysql');
var mysqlc = mysql.createConnection({
    host:'127.0.0.1',// host of server
    user:'ADMIN',// MySQL user
    password:'PASSWORD',// MySQL password
    database:'SERVER_TEST'// MySQL database
});

// Connection 
mysqlc.connect(function(e) {
    if(e) {
        console.log("Error connecting to the database with error "+e);
    } else {
        console.log('Database connected!');
    }
});

//Players Table Creation (Use one time)
var sql = "CREATE TABLE players (db_id INT AUTOINCREMENT,game_id INT DEFAULT 0, name TEXT, password TEXT, position TEXT DEFAULT '38,16,70', money INT DEFAULT 2000,health INT DEFAULT 100, rank TEXT DEFAULT 'player', PRIMARY KEY(name,passowrd)";
mysqlc.query(sql, function (err, result) {
    if (err) {
        throw err;
   };
   console.log("PLayers Table created");
});

    

//Exporting the connection to other Files
module.exports = mysqlc; 
