var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').createServer(app);
var hbs = require('express-handlebars')
app.use(express.static('./Public'));
app.use(bodyParser.urlencoded({ extended: true }));
http.listen(process.env.PORT || 3000);

app.engine('hbs',hbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layouts'}))
app.set('view engine','hbs')

app.get('/',function(req,res){
    res.render('home',{'title':"hello"})
})

