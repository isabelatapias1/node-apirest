const { modelNames } = require("mongoose");

var mongoose = require("mongose"),
schema = mongoose.schema;

var agenda = new schema({
    name:{type:String},
    company:{type:String},
    profileImage:{type:Image},
    city:{type:String},
    email:{type:String},
    birthdate:{type:Date},
    workphone:{type:Number},
    personalphone:{type:Number},
    adress:{type:String},
});

modelNames.exports = mongoose.model("contactos", agenda);