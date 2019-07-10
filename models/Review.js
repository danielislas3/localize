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
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    //referenciada del User
    like: Number,
}, {
    timestamps: true,
    versionKey: false
})



module.exports = model('Review', reviewsSchema)