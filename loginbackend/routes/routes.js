    const express = require('express')
    const router = express.Router()
    const loginModel = require('../models/LoginModels')
    const bcrypt = require('bcrypt') // for password encryption

    // when the user is on the /signup page, and they enter their data, they click button, which comes to this function.
    router.post('/signup', async (request, response) => {

        const saltPassword = await bcrypt.genSalt(10) // generating a salt for the password
        const securePassword = await bcrypt.hash(request.body.password, saltPassword) // hashing the password

        const signedUpUser = new loginModel({
            fullName: request.body.fullName, // in the request, the body is sent. The variables need to be bound on front-end
            username: request.body.username,
            email: request.body.email,
            password: securePassword // passing encrypted password into database
        })
        console.log(signedUpUser);

        signedUpUser.save() // mongoose function. Save to the database.
        .then(data => { 
            response.json(data) 
        })
        .catch(error => {
            response.json(error) // catch error.
        })
    })
module.exports = router