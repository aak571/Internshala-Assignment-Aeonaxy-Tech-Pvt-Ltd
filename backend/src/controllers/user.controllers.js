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
    await user_model.findOne({ username: req.params.username }).populate('profile').select('-_id -password -name -email')
        .then(resp => {
            if (resp) {
                // res.cookie('Warm Greetings', `${resp.name}`)
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

const delete_account = async (req, res, next) => {
    await user_model.findOneAndDelete({ username: req.params.username })
        .then(async resp => {
            if (resp) {
                const profile_id = resp.profile
                await profile_model.findOneAndDelete({ _id: profile_id })
                    .then(resp => {
                        if (resp) {
                            res.status(200).json(new server_response(200, resp, 'Account deleted'))
                        }
                        else {
                            res.status(400).json(new server_response(400, err, 'We could not delete your account due to some unexpected issue',
                                'Unsuccessful'))
                        }
                    })
                    .catch(err => {
                        res.status(400).json(new server_response(400, err, 'We could not delete your account due to some unexpected issue',
                            'Unsuccessful'))
                    })
            }
            else {
                res.status(400).json(new server_response(400, err, 'We could not delete your account due to some unexpected issue',
                    'Unsuccessful'))
            }
        })
        .catch(err => {
            res.status(400).json(new server_response(400, err, 'We could not delete your account due to some unexpected issue',
                'Unsuccessful'))
        })
}

const profile_build = async (req, res, next) => {
    await user_model.findOne({ username: req.body.username }).populate('profile')
        .then(async resp => {
            let image_name
            const profile_id = resp.profile._id
            // cl(profile_id)
            // const user_name = resp.name
            req.body.name = resp.username + '-' + req.body.name
            let s3_presigned_url = '/'

            await get_s3_signed_url_for_image_upload(req.body.name, req.body.type)
                .then(resp => {
                    if (resp === '') return res.status(500).json(new server_response(500, err, 'Could not create profile, please try again', 'Unsuccessful'))
                    else {
                        s3_presigned_url = resp
                        image_name = req.body.name
                    }
                })
                .catch(() => {
                    image_name = '/'
                })

            if (image_name === '/') {
                res.status(500).json(new server_response(500, err, 'Could not create profile, please try again',
                    'Unsuccessful'))
            }
            else {
                await profile_model.findOneAndUpdate({ _id: profile_id }, { profile_photo_name: image_name, location: req.body.location, what_brought_you_here: req.body.what_brought_you_here })
                    .then(resp => {
                        // cl(resp)
                        if (resp) res.status(201).json(new server_response(201, { s3_presigned_url, cookie_key: 'Warm Greetings', cookie_value: 'Hello dear' }, 'Profile created'))
                        else res.status(500).json(new server_response(500, err, 'Could not create profile, please try again',
                            'Unsuccessful'))
                    })
                    .catch(err => {
                        res.status(500).json(new server_response(500, err, 'Could not create profile, please try again',
                            'Unsuccessful'))
                    })
            }

        })
        .catch(err => {
            cl(err.message)
            res.status(400).json(new server_response(400, err, 'Could not create profile, please try again',
                'Unsuccessful'))
        })
}

const get_profile = async (req, res, next) => {
    await user_model.findOne({ username: req.body.username }).select('-password -email -username -name -_id -__v')
        .then(async resp => {
            if (resp) {
                // cl(resp)
                await profile_model.findOne({ _id: resp.profile }).select('-_id')
                    .then(resp => {
                        cl(resp)
                    })
                    .catch(err => {

                    })
            }
            else {

            }
        })
        .catch()
    res.status(200).send('This is ur profile')
}

export { create_account, authenticate_user, profile_build, delete_account, get_profile }