const router = require('express').Router()

const {
    getMyLocations
} = require('../controllers/owner.controller')

router.get('/myLocations', getMyLocations)

module.exports = router