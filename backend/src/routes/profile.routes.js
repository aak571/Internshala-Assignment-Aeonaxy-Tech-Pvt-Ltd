import { Router } from "express"
import { edit_profile, get_profile, get_s3_presigned_url } from "../controllers/profile.controllers.js"
import { cl } from "../utils/console.log.js"

const profile_routes = Router()


profile_routes.route('/get_profile').get(get_profile)
profile_routes.route('/get_s3_presigned_url').post(get_s3_presigned_url)
profile_routes.route('/edit_profile').put(edit_profile)

export { profile_routes }