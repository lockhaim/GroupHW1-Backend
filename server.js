const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const app = express()


const carsController = require('./controllers/cars.js')
app.use('/cars', carsController)

// app.use(cors())


// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.listen(3000, (req, res) => {
    console.log('Listening...');
})

mongoose.connect('mongodb://localhost:27017/carscrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...')
})