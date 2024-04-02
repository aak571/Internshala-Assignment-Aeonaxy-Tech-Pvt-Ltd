import { Router } from "express"
import { create_account } from "../controllers/user.controllers.js"

const user_routes = Router()

user_routes.route('/create_account').post(create_account)
user_routes.route('/get_user').get()
user_routes.route('/edit_user').put()
user_routes.route('/delete_user').delete()

export { user_routes }