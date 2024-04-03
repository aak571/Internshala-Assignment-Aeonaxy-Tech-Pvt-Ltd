import { user_model } from "../models/users.model.js"
import { profile_model } from "../models/profile.model.js"
import { server_response } from "../utils/server_response.js"
import { get_s3_signed_url_for_image_upload } from "../utils/s3/get_pre-signed_url_for_images.js"
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
                    res.status(400).json(new server_response(400, err, err.message, 'Unsuccessful'))
                })
        })
        .catch(err => {
            res.status(400).json(new server_response(400, err, "Couldn't create an account, please try again",
                'Unsuccessful'))
        })
}

const authenticate_user = async (req, res, next) => {
    await user_model.findOne({ email: req.params.username }).populate('profile')
        .then(resp => {
            cl(resp)
            if (resp) {
                res.cookie('Warm Greetings', `${resp.name}`)
                res.status(200).json(new server_response(200, resp, 'You are logged in successsfully, Welcome'))
            }
            else {
                res.status(404).json(new server_response(404, err, 'Looks like you do not have an account with us. Please go ahead and create one', 'Unsuccessful'))
            }
        })
        .catch(err => {
            res.status(400).json(new server_response(400, err, 'Looks like you do not have an account with us. Please go ahead and create one',
                'Unsuccessful'))
        })
}

const profile_build = async (req, res, next) => {
    cl(req.body)
    await user_model.findOne({ username: req.body.username }).populate('profile')
        .then(async resp => {
            // res.status(200).json(new server_response(200, resp, 'Profile built successfully'))
            const profile_id = resp.profile._id

            await get_s3_signed_url_for_image_upload(req.body.name, req.body.type)
                .then(resp => {
                    if (resp === '') res.status(500).json(new server_response(500, err, 'S3 ERROR', 'Unsuccessful'))
                    else res.status(201).json(new server_response(201, resp, 'S3 upload URL generated successfully'))
                })
                .catch(err => {
                    res.status(500).json(new server_response(500, err, 'Faced problem while generating upload URL',
                        'Unsuccessful'))
                })


        })
        .catch(err => {
            cl(err.message)
            res.status(400).json(new server_response(400, err, 'Looks like you do not have an account with us. Please go ahead and create one',
                'Unsuccessful'))
        })
}

export { create_account, authenticate_user, profile_build }