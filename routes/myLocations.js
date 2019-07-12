const router = require('express').Router()
const {isLoggedIn, checkLoggedUser}= require('../middlewares/auth')
const {checkRole}= require('../middlewares/checkRole')


const {
    getLocations,
    getOneLocation,
    getCreateLocation,
    postCreateLocation
} = require('../controllers/owner.controller')

//localhost:3000/myLocations
/*************Crud *****************/
router.get('/create',isLoggedIn, checkRole, getCreateLocation)
router.post('/create',isLoggedIn, postCreateLocation)
    /***********cRud ******************/
router.get('/', isLoggedIn,checkRole,getLocations)
router.get('/:id',isLoggedIn, getOneLocation)



module.exports = router