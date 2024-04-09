import { account_model } from "../models/account.model.js"
import { profile_model } from "../models/profile.model.js"
import { server_response } from "../utils/server_response.js"
import { get_s3_signed_url_for_image_upload } from "../utils/s3/get_pre-signed_url_for_images.js"
import { get_s3_signed_url, get_s3_signed_urls_for_default_avatars } from "../utils/s3/get_signed_url.js"
import { s3_delete_image } from "../utils/s3/delete-object.js"
import { cl } from "../utils/console.log.js"

const get_s3_presigned_url = async (req, res, next) => {
    try {
        await account_model.findOne({ username: req.body.username }).populate('profile').select('-password -email -name -_id -__v')
            .then(async resp => {
                const profile_id = resp.profile._id
                req.body.name = resp.username + '-' + req.body.name
                await get_s3_signed_url_for_image_upload(req.body.name, req.body.type)
                    .then(resp => {
                        if (resp === '') res.status(500).json(new server_response(500, err, 'Not in the position to update profile, please try again later while we fix the problem', 'Unsuccessful'))
                        else {
                            res.status(201).json(new server_response(201, { s3_presigned_url: resp, profile_id, profile_photo_name: req.body.name }, 'Updated profile'))
                        }
                    })
                    .catch(err => {
                        res.status(500).json(new server_response(500, err, 'Not in the position to update profile, please try again later while we fix the problem', 'Unsuccessful'))
                    })
            })
            .catch(err => {
                res.status(500).json(new server_response(500, err, 'Not in the position to update profile, please try again later while we fix the problem', 'Unsuccessful'))
            })
    }
    catch {
        res.status(500).json(new server_response(500, {}, 'Not in the position to update profile, please try again later while we fix the problem', 'Unsuccessful'))
    }
}

const edit_profile = async (req, res, next) => {
    try {
        const _id = req.body.profile_id
        const profile_photo_name = req.body.profile_photo_name
        await profile_model.findOneAndUpdate({ $or: [{ _id }, { profile_photo_name }] }, {
            profile_photo_name: req.body.profile_photo_name, location: req.body.location, what_brought_you_here: req.body.what_brought_you_here
        }).select('-what_brought_you_here -profile_photo_name -location -_id -__v')
            .then(async resp => {
                if (resp) {
                    //**Write the condition to skip this entire if-else when called without having to edit the profile image**
                    // Check why this is moving to else part even it returns true
                    if (req.body.name_old && await s3_delete_image(req.body.name_old)) {
                        res.status(201).json(new server_response(201, resp, 'Updated profile'))
                    }
                    else {
                        res.status(201).json(new server_response(201, {
                            message: 'Something went wrong while retrieving your updated photo'
                        }, "Updated successfully but unable to get your updated photo at the moment, please try updating it once again"))
                    }
                }
                else {
                    res.status(400).json(new server_response(400, {}, 'Error occured while updating your profile, please try again later',
                        'Unsuccessful'))
                }
            })
            .catch(err => {
                res.status(400).json(new server_response(400, err, 'Error occured while updating your profile, please try again later',
                    'Unsuccessful'))
            })
    }
    catch (err) {
        res.status(400).json(new server_response(400, err, 'Error occured while updating your profile, please try again later',
            'Unsuccessful'))
    }
}

const get_profile = async (req, res, next) => {
    try {
        await account_model.findOne({ username: req.body.username }).select('-password -email -username -name -_id -__v')
            .then(async resp => {
                if (resp) {
                    // cl(resp)
                    await profile_model.findOne({ _id: resp.profile }).select('-_id')
                        .then(async resp => {
                            const profile_photo_name = resp.profile_photo_name
                            const location = resp.location
                            const what_brought_you_here = resp.what_brought_you_here
                            if (resp) {
                                await get_s3_signed_url(resp.profile_photo_name)
                                    .then(resp => {
                                        if (resp) {
                                            res.status(200).json(new server_response(200, { profile_photo_name: profile_photo_name, location: location, what_brought_you_here: what_brought_you_here, profile_photo_url: resp }, 'Signed url of ur profile photo'))
                                        }
                                        else {
                                            res.status(400).json(new server_response(400, {}, 'Error occured while retrieving profile data, please try again later',
                                                'Unsuccessful'))
                                        }
                                    })
                                    .catch(err => {
                                        res.status(400).json(new server_response(400, err, 'Error occured while retrieving profile data, please try again later',
                                            'Unsuccessful'))
                                    })
                            }
                            else {
                                res.status(400).json(new server_response(400, {}, 'Error occured while retrieving profile data, please try again later',
                                    'Unsuccessful'))
                            }
                        })
                        .catch(err => {
                            res.status(400).json(new server_response(400, err, 'Error occured while retrieving profile data, please try again later',
                                'Unsuccessful'))
                        })
                }
                else {
                    res.status(400).json(new server_response(400, {}, 'Error occured while retrieving profile data, please try again later',
                        'Unsuccessful'))
                }
            })
            .catch(err => {
                res.status(400).json(new server_response(400, err, 'Error occured while retrieving profile data, please try again later',
                    'Unsuccessful'))
            })
    }
    catch {
        res.status(400).json(new server_response(400, err, 'Error occured while retrieving profile data, please try again later',
            'Unsuccessful'))
    }
}

const get_signed_urls_for_default_avatars = async (req, res, next) => {
    try {
        await get_s3_signed_urls_for_default_avatars()
            .then(resp => {
                if (resp) {
                    res.status(200).json(new server_response(200, resp, 'Here are the signed urls for default avatars'))
                }
                else {
                    res.status(400).json(new server_response(400, {}, "Couldn't retrieve deafult avatars due to some technical issue",
                        'Unsuccessful'))
                }
            })
            .catch(err => {
                res.status(400).json(new server_response(400, err, "Couldn't retrieve deafult avatars due to some technical issue",
                    'Unsuccessful'))
            })
    }
    catch {
        res.status(400).json(new server_response(400, {}, "Couldn't retrieve deafult avatars due to some technical issue",
            'Unsuccessful'))
    }
}

export { get_profile, edit_profile, get_s3_presigned_url, get_signed_urls_for_default_avatars }