var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = {
    name: String,
    password: String,
    admin: Boolean
};

module.exports = mongoose.model('Users', new Schema(users));