const User = require('../models/User')
const Location = require('../models/Location')

exports.getMyLocations = (req, res, next) => {
    Location.find({
            req.user._id
        })
        .then(users => res.render('owner/myLocations', {
            users.locations
        }))
        .catch(err => console.log(err))
}

exports.addLocation = (req, res, next) => {
    const {
        name,
        location,
        photo
    } = req.body
    Location.register({
            name,
            location,
            photo
        })
        .then(location => res.render('owner/myLocations'))
        .catch(err => console.log(err))
}

exports.deleteLocation = (req, res, next) => {
    const {
        id
    } = req.body
    Location.findByAndDelete(id)
        .then(location => res.redirect('/owner/myLocations'))

}