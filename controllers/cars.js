//Dependencies
const express = require('express');
const router = express.Router();
const Cars = require('../models/cars.js')


router.get('/', (req, res) => {
    Cars.find({}, (err, foundCar) => {
        res.json(foundCar)
    });
});

router.post('/', (req, res) => {
    Cars.create(req.body, (err, createdCar) => {
        res.json(createdCar)
    })
})

module.exports = router;
