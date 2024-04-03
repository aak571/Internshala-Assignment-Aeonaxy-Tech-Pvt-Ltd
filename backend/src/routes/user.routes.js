import { Router } from "express"
import { authenticate_user, create_account, profile_build } from "../controllers/user.controllers.js"

const user_routes = Router()

user_routes.route('/create_account').post(create_account)
user_routes.route('/authenticate_user/:username').get(authenticate_user)
user_routes.route('/profile_build').post(profile_build)
user_routes.route('/delete_user').delete()

export { user_routes }