const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'sql10.freemysqlhosting.net',
    user: 'sql10371716',
    password: 'jRusawXE66',
    database: 'sql10371716'
};

// Create a MySQL pool
const pool = mysql.createPool(config);
pool.query('DROP TABLE users');
pool.query('DROP TABLE user_tasks');


var taskstable = "CREATE TABLE IF NOT EXISTS user_tasks (`taskid` INTEGER(11) unsigned NOT NULL AUTO_INCREMENT, `description` VARCHAR(255) NOT NULL, `state` ENUM('to do', 'done') NOT NULL, `userid` INTEGER(11) UNSIGNED NOT NULL REFERENCES users(id), PRIMARY KEY (taskid)) ";
pool.query(taskstable, function (err, result) {
    if (err) throw err;
    console.log("Tasks table created");
});

var userstable = "CREATE TABLE IF NOT EXISTS users (`id` INTEGER(11) unsigned NOT NULL AUTO_INCREMENT, `name` VARCHAR(255) NOT NULL, PRIMARY KEY (id)) ";
pool.query(userstable, function (err, result) {
    if (err) throw err;
    console.log("Users table created");
});




// Export the pool
module.exports = pool;

