const mongoose = require('mongoose')

const signUpModel = new mongoose.Schema({
        fullName:{ 
            type:String,
            require:true

        },
        username:{
            type:String,
            require:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        date:{
            type:Date, // this is triggered when acc is made. linking the date of creation to an account.
            default:Date.now
        }
})

module.exports = mongoose.model('usertable', signUpModel)