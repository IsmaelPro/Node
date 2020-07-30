var http = require('http');

var server = http.createServer(function(req,res){
    var categoria = req.url

    if(categoria == '/tecnologia'){
            res.end("<html><body>Nociticias de Tecnologia</body></html>");
        } else if(categoria == '/moda'){
            res.end("<html><body>Nociticias de Moda</body></html>");
        } else if(categoria == '/Compras'){
            res.end("<html><body>Nociticias de Compras</body></html>");

        } else {
            res.end("<html><Portal de Noticias</body></html>")
        }
})

.listen(3000)