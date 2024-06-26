import { account_model } from "../models/account.model.js"
import { profile_model } from "../models/profile.model.js"
import { server_response } from "../utils/server_response.js"
import { sign_jwt } from "../utils/jwt-signing.js"

const create_account = async (req, res, next) => {
    try {
        /***********Creating the 'Profile' document first************/
        await profile_model.create({})
            .then(async resp => {
                const profile_id = resp._id
                await account_model.create({
                    name: req.body.name, username: req.body.username, email: req.body.email, password: req.body.password,
                    profile: profile_id
                })
                    .then(() => {
                        res.status(200).json(new server_response(200, { profile_id }, "That's awesome your Account is created successfully !!!"))
                    })
                    .catch(async err => {
                        /***Deleting the Profile document that was created earlier as the account creation isn't successful***/
                        await profile_model.findByIdAndDelete(profile_id)

                        res.status(400).json(new server_response(400, err, "Couldn't create the account due to some unexpected issue", 'Unsuccessful'))
                    })
            })
            .catch(err => {
                res.status(400).json(new server_response(400, err, "Couldn't create the account due to some unexpected issue, please try again",
                    'Unsuccessful'))
            })
    }
    catch {
        res.status(500).json(new server_response(400, {}, "Something went wrong unexpectedly, please try again later",
            'Unsuccessful'))
    }
}

/*This controller could have been used by the frontend if had some more time*/
const authenticate_user = async (req, res, next) => {
    try {
        await account_model.findOne({ username: req.params.username }).select('-_id -name -email')
            .then(async resp => {
                if (resp) {
                    const is_password_right = await resp.is_password_correct(req.body.password, resp.password)
                    if (is_password_right) {
                        /*********Preparing access tokens for the logged in user**************/
                        const access_tokens = sign_jwt()

                        return res.status(200).json(new server_response(200, access_tokens, 'You are logged in successsfully, Welcome'))
                    }
                    else { // Please give a good body for the below response snd rectify this kind error in all other cases
                        return res.status(404).json(new server_response(403, {}, 'Incorrect Password', 'Unsuccessful'))
                    }
                }
                else {
                    return res.status(404).json(new server_response(404, {}, 'Looks like you do not have an account with us. Please go ahead and create one', 'Unsuccessful'))
                }
            })
            .catch(err => {
                return res.status(400).json(new server_response(400, err, 'Looks like you do not have an account with us. Please go ahead and create one',
                    'Unsuccessful'))
            })
    }
    catch {
        return res.status(400).json(new server_response(400, {}, 'Unable to log you in at the moment. Please try later',
            'Unsuccessful'))
    }
}

/*This controller could have been used by the frontend if had some more time*/
const go_to_dashboard = (req, res, next) => {
    /*  req.verification comes from the middleware - 'verify_access_token'  */
    if (req.verification) {
        res.status(200).json(new server_response(200, {}, 'Yes, you are authorised to access dashboard'))
    }
    else {
        /*In this case the user has to login again to get a new access token*/
        res.status(200).json(new server_response(403, {}, "We would highly suggest you to login now as we care alot about your privacy and security. Thank you."))
    }
}

/*This controller could have been used by the frontend if had some more time*/
const delete_account = async (req, res, next) => {
    try {
        await account_model.findOneAndDelete({ username: req.params.username })
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
                    res.status(400).json(new server_response(400, {}, 'We could not delete your account due to some unexpected issue',
                        'Unsuccessful'))
                }
            })
            .catch(err => {
                res.status(400).json(new server_response(400, err, 'We could not delete your account due to some unexpected issue',
                    'Unsuccessful'))
            })
    }
    catch {
        res.status(400).json(new server_response(400, {}, 'We could not delete your account due to some unexpected issue',
            'Unsuccessful'))
    }
}



export { create_account, authenticate_user, go_to_dashboard, delete_account }