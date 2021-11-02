const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
    make: String,
    model: String,
    img: String,
    sold: Boolean
});

const Cars = mongoose.model('Car', carsSchema);

module.exports = Cars;
