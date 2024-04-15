const mongoose = require('mongoose')
const { isValidEmail, isValidPassword } = require('../middleware/validate')

const AdminSchema = mongoose.Schema({

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
        lowecase:true,
        validate:[isValidEmail,"Please Enter Valid Email"]
    },
    Password:{
        type:String,
        required:true,
        validate:[isValidPassword,"Minimum Password Length Is 6 Characters"]
    }
})

module.exports = mongoose.model('Admin',AdminSchema)