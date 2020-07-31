const dbConnetcion = require('../../config/dbConnection');
module.exports = function(app){
    const connection = dbConnetcion();

    app.get('/noticias', function(req, res){

        connection.query('select * from noticias', function(err, result) {
            res.render("noticias/noticias",{noticias: result});  
        });
    });
};

