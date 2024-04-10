import { Router } from "express"
import { edit_profile, get_profile, get_s3_presigned_url, get_signed_urls_for_default_avatars }
    from "../controllers/profile.controllers.js"
import { cl } from "../utils/console.log.js"

const profile_routes = Router()

profile_routes.route('/get_profile/:username').get(get_profile)
profile_routes.route('/get_s3_presigned_url').post(get_s3_presigned_url)
profile_routes.route('/edit_profile').put(edit_profile)
profile_routes.route('/get_signed_urls_for_default_avatars').get(get_signed_urls_for_default_avatars)

export { profile_routes }