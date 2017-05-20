var utils;
utils = {
    connectToDb: function(mongoose, config, cb) {
        var dbPath;
        dbPath  = "mongodb://" + config.db.user + ":";
	dbPath += config.db.pass + "@";
	dbPath += config.db.host + ((config.PORT.length > 0) ? ":" : "");
	dbPath += config.db.port + "/";
	dbPath += config.db.database;
	return mongoose.connect(dbPath, cb);
    }
};
module.exports = utils;
