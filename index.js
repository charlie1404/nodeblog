var express       = require('express');
var http          = require('http');
var path          = require('path');
var mongoose      = require('mongoose');
var compression   = require('compression');
var bodyParser    = require('body-parser');
var jwt           = require('jsonwebtoken');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');

var routes = require('./app/routes/index');

var app = express();

//app.use('/css', express.static('dist/css'));
//app.use('/images', express.static('dist/images'));
//app.use('/fonts', express.static('dist/fonts'));
//app.use('/js', express.static('dist/js'));
//app.use('/templates', express.static('dist/templates'));

app.use('/', routes);
app.use(compression());
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
        res.send({"error_code": "404", "message": "Not Found"});
        return;
    }

    res.type('txt').send('Not found');
});

app.listen(8080, 'localhost', function () {
    console.log("Example app listening on port http:\/\/localhost\/8080!");
});
