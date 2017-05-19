var express     = require('express');
var path        = require('path');
var router      = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(process.env.HOME,'nodeblog/public/index.html'));
});

router.get('/login',function(req, res){
    res.send('You are on the login page');
});

router.get('/logout', function(req, res){
    res.send('You are on the logout page');
});

router.get('/polls', function(req, res){
    res.send('You are on the polls page');
});

router.get('/user', function(req, res, next) {
    res.send('You are on the user page');
});

module.exports = router;