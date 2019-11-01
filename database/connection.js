var mysql = require('mysql');

var connection;

// // Prepare mySQL configuration
// if (process.env.JAWSDB_URL){
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         port: 3306,
//         user: 'root',
//         password: '',
//         database: 'note_db'
//     });
// }

// Prepare mySQL configuration
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'rlrfb957dqqusvxe',
        password: 'xx4ct33cbvb5d8ad',
        database: 'rpms65idvxlg2hrb'
    });
}


// Connect server to mySQL
connection.connect(function(err){
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

