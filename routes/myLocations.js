const router = require('express').Router()

const {
    getLocations,
    getOneLocation,
    getCreateLocation,
    postCreateLocation
} = require('../controllers/owner.controller')

router.get('/', getLocations)

router.get('/', getOneLocation)

router.get('/create', getCreateLocation)

router.post('/create', postCreateLocation)

module.exports = router