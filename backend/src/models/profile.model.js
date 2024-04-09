import mongoose from "mongoose"

const profile_schema = new mongoose.Schema({
    profile_photo_name: {
        type: String,
        unique: true,
        default: ''
    },
    location: {
        type: String,
        trim: true,
        default: ''
    },
    what_brought_you_here: {
        type: String,
        trim: true,
        default: ''
    }
}, { timestamps: true })

const profile_model = mongoose.model('profile', profile_schema)

export { profile_model }