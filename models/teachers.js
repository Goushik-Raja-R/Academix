const mongoose = require('mongoose');
const {isValidEmail,isValidPassword} = require('../middleware/validate')


const teacherSchema = mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:[true,"Please Enter Email"],
        unique:true,
        lowercase:true,
        validate:[isValidEmail,"Please Enter Valid Email"]
    },
    Role:{
        type:String
    },
    Password:{
        type:String,
        required:true,
        validate:[isValidPassword,"Minimum Password Length is 6 Characters"]
    },
    TeachingExperience:{
        type:String,
        required:true
    },
    TermsAccepted:{
        type:Boolean,
        required:true
    }
})

module.exports = mongoose.model('Teachers',teacherSchema)