
module.exports = function(application){

    

    application.get('/noticias', function(req, res){

        const connection = application.config.dbConnection();
        const noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(err, result) {
            res.render("noticias/noticias",{noticias: result});  
        });


    });
};


