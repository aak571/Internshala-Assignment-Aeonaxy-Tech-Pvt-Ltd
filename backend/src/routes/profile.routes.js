import { Router } from "express"
import { edit_profile, get_profile, get_s3_presigned_url, get_signed_urls_for_default_avatars, upload_avatar_to_s3 }
    from "../controllers/profile.controllers.js"
import { cl } from "../utils/console.log.js"

const profile_routes = Router()

// Optimise the routes urls**************************
profile_routes.route('/get_profile').get(get_profile)
profile_routes.route('/get_s3_presigned_url').post(get_s3_presigned_url)
profile_routes.route('/edit_profile').put(edit_profile)
profile_routes.route('/get_signed_urls_for_default_avatars').get(get_signed_urls_for_default_avatars)
profile_routes.route('/upload_avatar_to_s3').post(upload_avatar_to_s3)

export { profile_routes }