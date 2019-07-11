const router = require('express').Router()

const {
    getLocations,
    getOneLocation,
    getCreateLocation,
    postCreateLocation
} = require('../controllers/owner.controller')

//localhost:3000/myLocations
/*************Crud *****************/
router.get('/create', getCreateLocation)
router.post('/create', postCreateLocation)
    /***********cRud ******************/
router.get('/', getLocations)
router.get('/:id', getOneLocation)



module.exports = router