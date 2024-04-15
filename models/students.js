const mongoose = require('mongoose')
const { isValidEmail, isValidPassword } = require('../middleware/validate')

const StudentSchema = mongoose.Schema({

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
        required:true,
        unique:true,
        lowercase:true,
        validate:[isValidEmail,"Please Enter Valid Email"]
    },
    Role:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true,
        validate:[isValidPassword,"Minimum Password Length is 6 Characters"]
    },
    AreaOfInterest:{
        Type:String
    },
    TermsAccepted:{
        type:Boolean,
        required:true
    }
})

module.exports = mongoose.model('Students',StudentSchema)