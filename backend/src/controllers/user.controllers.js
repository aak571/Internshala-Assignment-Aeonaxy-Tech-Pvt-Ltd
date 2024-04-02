import { user_model } from "../models/users.model.js"
import { profile_model } from "../models/profile.model.js"
import { server_response } from "../utils/server_response.js"
import { cl } from "../utils/console.log.js"

const create_account = async (req, res, next) => {
    cl(req.body)
    await profile_model.create({})
        .then(async resp => {
            const profile_id = resp._id
            await user_model.create({
                name: req.body.name, username: req.body.username, email: req.body.email, password: req.body.password,
                profile: profile_id
            })
                .then(resp => {
                    res.status(200).json(new server_response(200, resp, 'Account created successfully !!!'))
                })
                .catch(err => {
                    res.status(400).json(new server_response(400, err, "Couldn't create an account, please try again",
                        'Unsuccessful'))
                })
        })
        .catch(err => {
            res.status(400).json(new server_response(400, err, "Couldn't create an account, please try again",
                'Unsuccessful'))
        })
}

const get_user = (req, res, next) => {

}

const edit_user = (req, res, next) => {

}

const delete_user = (req, res, next) => {

}

export { create_account, get_user, edit_user, delete_user }