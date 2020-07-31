const mysql = require('mysql');

const connMySQL = function(){
        console.log('Conexão com bd foi estabelecida')
        return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '34837137',
        database: 'portal_noticias'
    });
}
module.exports = function() {
    
    return connMySQL;
}
