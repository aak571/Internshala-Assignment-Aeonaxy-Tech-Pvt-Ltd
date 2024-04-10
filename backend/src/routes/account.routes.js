import { Router } from "express"
import { verify_access_token } from "../middlewares/verify-access-token.middleware.js"
import { create_account, authenticate_user, delete_account, go_to_dashboard } from "../controllers/account.controllers.js"

const account_routes = Router()

account_routes.route('/create').post(create_account)
account_routes.route('/authenticate/:username').post(authenticate_user)
account_routes.route('/dashboard').post(verify_access_token, go_to_dashboard)
account_routes.route('/delete/:username').delete(delete_account)

export { account_routes }