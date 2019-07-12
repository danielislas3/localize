const router = require('express').Router()
const uploadCloud = require('../config/cloudinary')

const {
    isLoggedIn,
    checkLoggedUser
} = require('../middlewares/auth')
const {
    checkRole
} = require('../middlewares/checkRole')


const {
    getLocations,
    getOneLocation,
    getCreateLocation,
    postCreateLocation,
    getEditLocation,
    postEditLocation,
    getDeleteLocation
} = require('../controllers/owner.controller')

//localhost:3000/myLocations

/*************Crud *****************/
router.get('/create', isLoggedIn, checkRole, getCreateLocation)
router.post('/create', isLoggedIn, uploadCloud.single('photo'), postCreateLocation)
    /*************cRud *****************/
router.get('/', isLoggedIn, checkRole, getLocations)
router.get('/:id', isLoggedIn, getOneLocation)
    /*************crUd *****************/
router.get('/:id/edit', getEditLocation)
router.post('/:id',uploadCloud.single('photo'),postEditLocation)
    /*************cruD *****************/
router.get('/:id/delete', getDeleteLocation)



module.exports = router