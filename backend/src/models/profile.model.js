import mongoose from "mongoose"

const profile_schema = new mongoose.Schema({
    profile_photo_name: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        lowercase: true,
        trim: true,
        default: ''
    },
    what_brought_you_here: {
        type: String,
        lowercase: true,
        trim: true,
        default: ''
    }
})

const profile_model = mongoose.model('profile', profile_schema)

export { profile_model }