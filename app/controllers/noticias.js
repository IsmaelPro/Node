module.exports.noticias = function(application, req, res){
    const connection = application.config.dbConnection();
    const noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias( function(err, result) {
            res.render("noticias/noticias",{noticias: result});  
        });
}

module.exports.noticia = function(application, req, res){
    const connection = application.config.dbConnection();
        const noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function(err, result) {
            res.render("noticias/noticia",{noticia: result});  
        });
}