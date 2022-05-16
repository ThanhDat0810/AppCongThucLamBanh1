const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//require('dotenv').load()
const port = process.env.PORT || 3000

// const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb+srv://thanhdat:thanhdat@mern-data.ukaa7.mongodb.net/MERN-Data?retryWrites=true&w=majority')

//         console.log('MongoDB connected')
//     } catch (error) {
//         console.log(error.message)
//         process.exit(1)
//     }
// }

// connectDB()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



let routes = require('./api/routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port)

