//Dependencies
const express = require('express');
const router = express.Router();
const Cars = require('../models/cars.js')

//index route
router.get('/', (req, res) => {
    Cars.find({}, (err, foundCar) => {
        res.json(foundCar)
    });
});

//create route
router.post('/', (req, res) => {
    Cars.create(req.body, (err, createdCar) => {
        res.json(createdCar)
    })
})

router.delete('/:id', (req, res) => {
    Cars.findByIdAndRemove(req.params.id, (err, deletedCar) => {
        res.json(deletedCar)
    })
})

module.exports = router;
