const {
    model,
    Schema
} = require('mongoose')

const locationSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    locationType: {
        type: String,
        enum: ['bar', 'restaurant', 'library', 'hotel', 'entreteinmentCenter'],
        required: true
    },

    ranking: {
        type: Number,
        required: true
    },
    location: {
        address: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number],

    },

    photo: {
        type: [String],
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        required: true
    }

}, {
    timestamps: true,
    versionKey: false
})


module.exports = model('Location', locationSchema)