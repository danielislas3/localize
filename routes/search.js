const router = require('express').Router()

const {
    getEntreteinmentCenter,
    getHotels,
    getBars,
    getLibraries,
    getRestaurants
} = require('../controllers/search.controller')

router.get('/bars', getBars)

router.get('/entreteinmentCenter', getEntreteinmentCenter)

router.get('/hotels', getHotels)

router.get('/libraries', getLibraries)

router.get('/restaurants', getRestaurants)

module.exports = router