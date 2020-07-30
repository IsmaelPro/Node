var app = require('./config/server')

app.get('/form_add_noticia', function(req, res){
    res.send("admin/form_add_noticia")
});

app.get('/', function(req, res){
    res.render("home/index")
});

app.get('/home', function(req, res){
    res.render("home/index")
});

app.get('/noticias', function(req, res){
    res.render("noticias/noticias")
});
app.listen(3000, function(){
    console.log('Servidor on')
});