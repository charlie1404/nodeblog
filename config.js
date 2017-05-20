var config = {};

config.db = {};

config.db.user     = "admin";
config.db.pass     = "admin";
config.db.host     = "ds117919.mlab.com";
config.db.port     = "17919";
config.db.database = "learningapp";

config.secret      = "This is super secret string";


config.db.url      = 'mongodb://' + config.db.user + ':'+ config.db.pass +'@'+ config.db.host +':' + config.db.port + '/' + config.db.database;

module.exports = config;
