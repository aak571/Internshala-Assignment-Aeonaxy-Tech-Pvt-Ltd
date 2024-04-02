import mongoose from "mongoose"

const profile_schema = new mongoose.Schema({
    aws_s3_photo_url: {
        type: String,
        default: 'aws s3 presigned url goes here'
    },
    location: {
        type: String,
        lowercase: true,
        trim: true,
        default: "user location goes here"
    },
    what_brought_you_here: {
        type: String,
        lowercase: true,
        trim: true,
        default: 'The reason why user chose our website goes here'
    }
})

const profile_model = mongoose.model('profile', profile_schema)

export { profile_model }