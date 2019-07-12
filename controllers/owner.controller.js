const User = require('../models/User')
const Location = require('../models/Location')


exports.getLocations = (req, res, next) => {
    Location.find()
        .then(locations => res.render('owner/myLocations', {
            locations
        }))
        .catch(err => res.send(err))
}

exports.getOneLocation = (req, res, next) => {
    Location.findById(req.params.id)
        .then(location => res.render('owner/location', location))
        .catch(err => next(err))
}

exports.getCreateLocation = (req, res, next) => res.render('owner/create')

exports.postCreateLocation = (req, res, next) => {
    const {
        name,
        
        locationType,
        lat,
        lng
    } = req.body
    const photo = req.file.url

    Location.create({
            ...req.body,
            photo: [photo],
            location: {
                coordinates: [Number(lng), Number(lat)]
            },
            owner: req.user.id
        })
        .then(location => res.redirect(`/myLocations/${location._id}`))
        .catch(err => next(err))
}

exports.getEditLocation = (req, res, next) => {
    Location.findById(req.params.id)
        .then(location => res.render('owner/edit', location))
        .catch(err => next(err))
}

exports.postEditLocation = (req, res, next) => {
    const {
        name,
        locationType,
        lat,
        lng
    } = req.body
    const photo = req.file.url
    Location.findByIdAndUpdate(req.params.id, {
            ...req.body,
            photo: [photo]

        }, {
            new: true
        })
        .then(location => {
            console.log("redirigiendo")
            res.redirect(`/myLocations/${location._id}`)
        })
        .catch(err => next(err))
}

exports.getDeleteLocation = (req, res, next) => {
    Location.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/myLocations'))
        .catch(err => next(err))
}