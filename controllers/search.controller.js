const Location = require('../models/Location')

exports.getRestaurants = (req, res, next) => res.render('search/restaurants')

exports.getBars = (req, res, next) => res.render('search/bars')

exports.getEntreteinmentCenter = (req, res, next) => res.render('search/entreteinmentCenter')

exports.getHotels = (req, res, next) => res.render('search/hotels')

exports.getLibraries = (req, res, next) => res.render('search/libraries')