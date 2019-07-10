const {
    model,
    Schema
} = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    owner: {
        type: Boolean,
        default: false
    },
    locations: [{
        type: Schema.Types.ObjectId,
        ref: 'Location'
    }],
    admin: {
        type: Boolean,
        default: false
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Reviews'
    }],
    email: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png'
    }
}, {
    timestamps: true,
    versionKey: false
})

// We add steroids to our model, because of this, we don't have to add the "password" field to our model
userSchema.plugin(passportLocalMongoose, {
    // PLM by default register users with "username" and "password", we need to configure a different field
    usernameField: 'email'
})

module.exports = model('User', userSchema)