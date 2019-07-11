const router = require('express').Router()

const {
    getAllLocations,
    getOneLocation
} = require('../controllers/search.controller')

router.get('/locations', getAllLocations)

router.get('/:id', getOneLocation)


module.exports = router