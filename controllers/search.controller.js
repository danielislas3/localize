const Location = require('../models/Location')

// exports.getRestaurants = (req, res, next) => {
//     Location.find(req.params.locationType == 'restaurant')
//         .then(locations => res.render('search/locations', locations))
//         .catch(err => console.log(err))
// }

exports.getAllLocations = (req, res, next) => {
    Location.find()
        .then(locations => res.render('search/locations', {
            locations
        }))
        .catch(err => console.log(err))

}

exports.getOneLocation = (req, res, next) => {
    Location.findById(req.params.id)
        .then(location => res.render('search/locationsDetails', location))
        .catch(err => next(err))
}