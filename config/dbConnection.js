const mysql = require('mysql');

module.exports = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '34837137',
        database: 'portal_noticias'
    });
}
