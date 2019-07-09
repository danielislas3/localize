const {
    model,
    Schema
} = require('mongoose')

const locationSchema = new Schema({

    name: String,
    ranking: Number,
    location: {
        address: String,
        coordinates: [Number]
    },
    photo: [String],
    required: true
}, {
    timestamps: true,
    versionKey: false
})


module.exports = model('Location', locationSchema)