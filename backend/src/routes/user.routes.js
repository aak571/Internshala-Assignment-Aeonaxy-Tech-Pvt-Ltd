import { Router } from "express"
import {
    authenticate_user, create_account, delete_account, edit_profile, get_profile, get_s3_presigned_url
} from "../controllers/user.controllers.js"
import { cl } from "../utils/console.log.js"

const user_routes = Router()

user_routes.route('/create_account').post(create_account)
user_routes.route('/authenticate_user/:username').post(authenticate_user)
user_routes.route('/delete_account/:username').delete(delete_account)
user_routes.route('/get_profile').get(get_profile)
user_routes.route('/get_s3_presigned_url').post(get_s3_presigned_url)
user_routes.route('/edit_profile').put(edit_profile)

export { user_routes }