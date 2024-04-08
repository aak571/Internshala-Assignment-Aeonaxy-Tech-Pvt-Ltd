import mongoose, { Schema } from "mongoose"
import bcrypt from 'bcrypt'

const account_schema = new mongoose.Schema({
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
}, { timestamps: true })

account_schema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 15)
    next()
})

account_schema.methods.is_password_correct = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const account_model = mongoose.model('user', user_schema)

export { account_model }