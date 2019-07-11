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

    ranking: Number,

    location: {
        address: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number],

    },

    photo: {
        type: [String],
        default: 'https://image.flaticon.com/icons/svg/63/63610.svg',
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