import mongoose, { Schema } from "mongoose"

const user_schema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        unique: true,
        trim: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'profile'
    }
})

const user_model = mongoose.model('user', user_schema)

export { user_model }