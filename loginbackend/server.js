const express = require('express') // express package
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const dotenv = require('dotenv')
const routes = require('./routes/routes')
const cors = require('cors')
const app = express(); // initilising express

dotenv.config() // using dot env package for safe security

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))

app.use(bodyParser.json())  //parsing our incoming and outoing requests
app.use(cors()) // corse middle-ware
app.use('/services', routes) // api is the base path. routes.js then handles the next pathing, such as post(/create)
app.listen(4000, () => console.log("Server is up and running..")) // listening to port 4000