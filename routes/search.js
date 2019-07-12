const router = require('express').Router()

const {
    getAllLocations,
    getOneLocation,
    getAllTypes
} = require('../controllers/search.controller')

router.get('/locations', getAllLocations)

router.get('/locations/:id', getOneLocation)

router.get('/locatios/:locationTypes',getAllTypes)
module.exports = router