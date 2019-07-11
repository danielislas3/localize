require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const favicon = require('serve-favicon')
const hbs = require('hbs')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')

// Require passport !!IMPORTANT!!, our own configured passport
const passport = require('./config/passport')
    // Require express session
const session = require('express-session')
    // Middleware for check logged user
const {
    checkLoggedUser
} = require('./middlewares/auth')

mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

//bootstrap 
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.use('/images', express.static(__dirname + '/public/images'));









// Configure the session
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 2419200000
        }
    })
)

// Initialize passport and configure the session into passport
app.use(passport.initialize())
app.use(passport.session())

// Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cookieParser())

// Express View engine setup
app.use(
    require('node-sass-middleware')({
        src: path.join(__dirname, 'public'),
        dest: path.join(__dirname, 'public'),
        sourceMap: true
    })
)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
hbs.registerPartials(__dirname + '/views/partials')


// default value for title local
app.locals.title = 'Localize'

const index = require('./routes/index')
const search = require('./routes/search')
    // We use the middleware for dynamic navbar
app.use('/', checkLoggedUser, index)
app.use('/search', search)

module.exports = app