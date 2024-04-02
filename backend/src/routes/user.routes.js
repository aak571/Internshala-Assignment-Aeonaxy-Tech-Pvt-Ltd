import { Router } from "express"

const user_routes = Router()

user_routes.route('/create_account').post()
user_routes.route('/get_user').get()
user_routes.route('/edit_user_details').put()
user_routes.route('/delete_user').delete()

export { user_routes }