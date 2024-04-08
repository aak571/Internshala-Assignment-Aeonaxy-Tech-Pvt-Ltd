import { Router } from "express"
import { create_account, authenticate_user, delete_account } from "../controllers/account.controllers.js"

const account_routes = Router()

account_routes.route('/create').post(create_account)
account_routes.route('/authenticate/:username').post(authenticate_user)
account_routes.route('/delete/:username').delete(delete_account)

export { account_routes }