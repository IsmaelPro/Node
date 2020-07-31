
module.exports = function(app){

    app.get('/noticia', function(req, res){

        const connection = app.config.dbConnection();

        connection.query('select * from noticias where id_noticia = 2', function(err, result) {
            res.render("noticias/noticia",{noticia: result});  
        });
    });
};