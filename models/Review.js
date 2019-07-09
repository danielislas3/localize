const {
    model,
    Schema
} = require('mongoose')

const reviewsSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    ranking: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        default: ""
    }, //referenciada del User
    like: Number,
}, {
    timestamps: true,
    versionKey: false
})



module.exports = model('Review', reviewsSchema)