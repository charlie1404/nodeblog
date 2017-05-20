var express       = require('express');
var http          = require('http');
var path          = require('path');
var compression   = require('compression');
var bodyParser    = require('body-parser');
var jwt           = require('jsonwebtoken');

var routes        = require('./app/routes/index');

var app = express();

//app.use('/css', express.static('public/css'));
//app.use('/images', express.static('public/images'));
//app.use('/fonts', express.static('public/fonts'));
//app.use('/js', express.static('public/js'));

app.use(compression());
app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.disable('x-powered-by');

app.use(function (req, res) {
    res.status(404);
    
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'public/404.html'));
        return;
    }
    
    if (req.accepts('json')) {
        res.send({"error_code" : "404", "message" : "Not Found"});
        return;
    }
    
    res.type('txt').send('Not found');
});

app.listen(8080, 'localhost', function () {
    console.log("Example app listening on port http:\/\/localhost\/8080!");
});
