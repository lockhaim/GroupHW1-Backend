const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

//controllers
const carsController = require('./controllers/cars.js')

//middleware
app.use(express.json())
app.use('/cars', carsController)
app.use(cors())

app.listen(3000, (req, res) => {
    console.log('Listening...!');
})

mongoose.connect('mongodb://localhost:27017/carscrud')
mongoose.connection.once('open', () => {
    console.log('connected to cars mongod...')
})
