import mongoose, { Schema } from "mongoose"

const profile_schema = new mongoose.Schema({
    aws_s3_photo_url: {
        type: String,
    },
    location: {
        type: String,
        lowercase: true,
        trim: true
    },
    what_brought_you_here: {
        type: String,
        lowercase: true,
        trim: true
    }
})

const profile_model = mongoose.model('profile', profile_schema)

export { profile_model }