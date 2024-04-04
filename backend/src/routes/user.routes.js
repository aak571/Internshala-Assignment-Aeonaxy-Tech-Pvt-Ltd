import { Router } from "express"
import {
    authenticate_user, create_account, delete_account, edit_profile_when_profile_photo_did_not_change, get_profile, profile_build
} from "../controllers/user.controllers.js"

const user_routes = Router()

user_routes.route('/create_account').post(create_account)
user_routes.route('/authenticate_user/:username').get(authenticate_user)
user_routes.route('/profile_build').post(profile_build)
user_routes.route('/delete_account/:username').delete(delete_account)
user_routes.route('/get_profile').get(get_profile)
user_routes.route('/edit_profile_when_profile_photo_did_not_change').put(edit_profile_when_profile_photo_did_not_change)

export { user_routes }