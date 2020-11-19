var mongoose = require('mongoose');
var schema =   mongoose.schema;
/*
var UserSchema= Schema({
    nombres: String,
    //apellidos: String,
    //email: String,
    //password: String,
    //role: String
});*/
var UserSchema =mongoose.Schema({
    nombres: String,
    apellidos: String,
    email: String,
    password: String,
    role: String
});

module.exports = mongoose.model('user',UserSchema);