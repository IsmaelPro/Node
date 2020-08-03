var express = require('express');
const consign = require('consign');
const bodyPArser = require('body-parser');
const expressValidator = require('express-validator');

var app = express();
app.set('view engine','ejs')
app.set('views', './app/views');

app.use(bodyPArser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app);


module.exports = app;