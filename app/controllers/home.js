module.exports.index = function(application, req, res){
    const connection = application.config.dbConnection();
    const noticiasModel = new application.app.models.NoticiasDAO(connection);

    

    
    noticiasModel.get5TultimasNoticias(function(err, result){
    
        res.render("home/index", {noticias: result});
    });
}