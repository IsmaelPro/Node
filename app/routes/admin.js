module.exports = function(application){
    application.get('/form_add_noticia', function(req, res){
    res.render("admin/form_add_noticia", {validacao: {}, noticia:{} })
});
    application.post('/noticias/salvar', function(req, res){
        const noticia = req.body;
    
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'O resumo é obrigatório').notEmpty();
        req.assert('resumo', 'O resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Noticia é obrigatória').notEmpty();

        var erros = req.validationErrors();
        if(erros){
            console.log(erros)
            res.render('admin/form_add_noticia.ejs', { validacao: erros, noticia: noticia}); 
            return;
          }



    const connection = application.config.dbConnection();
    const noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(err, result) {
        res.redirect('/noticias');
        //res.render("noticias/noticias",{noticias: result});  
    });
});
}

