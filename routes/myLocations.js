const router = require('express').Router()

const {
    getLocations,
    getCreateLocation,
    postCreateLocation
} = require('../controllers/owner.controller')

router.get('/', getLocations)

router.get('/create', getCreateLocation)

router.post('/create', postCreateLocation)

module.exports = router