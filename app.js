var express =require('express');

var app = express();

var path = require('path');
var viewPath = path.join(__dirname, './views');
var itemDB= require('./models/itemDB')
app.set('view engine', 'ejs');
app.set('views', viewPath);

app.use('/assets', express.static('assests'));
app.use('/assets/css',express.static(path.join(__dirname,'/./assets/css')));
app.use('/assets/images',express.static(path.join(__dirname,'/./assets/images')));

var catalogcontroller = require('./controller/catalogcontroller.js');
app.use('/',catalogcontroller);

app.listen(8080);
