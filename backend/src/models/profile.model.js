import mongoose from "mongoose"

const profile_schema = new mongoose.Schema({
    profile_photo_name: {
        type: String,
        default: 'No profile photo yet'
    },
    location: {
        type: String,
        lowercase: true,
        trim: true,
        default: "No location yet"
    },
    what_brought_you_here: {
        type: String,
        lowercase: true,
        trim: true,
        default: 'No reason yet'
    }
})

const profile_model = mongoose.model('profile', profile_schema)

export { profile_model }