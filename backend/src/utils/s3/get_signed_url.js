import { GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { get_s3_client } from "./s3_credentials.js"
import { default_avatar_1, default_avatar_2, default_avatar_3, default_avatar_4 } from "../../constants.js"
import { cl } from "../console.log.js"

const get_s3_signed_url = async key => {
    try {
        const s3_client = get_s3_client()
        const get_object_command = new GetObjectCommand({
            Bucket: process.env.BUCKET_NAME,
            Key: key
        })
        let URL = ''
        await getSignedUrl(s3_client, get_object_command, { expiresIn: 3600 })
            .then(url => {
                URL = url
            })
            .catch(() => {
                URL = ''
            })
        return URL
    }
    catch {
        return ''
    }
}

const get_s3_signed_urls_for_default_avatars = async () => {
    try {
        const s3_client = get_s3_client()
        let default_avatars_urls = []
        default_avatars_urls = await Promise.all([default_avatar_1, default_avatar_2, default_avatar_3, default_avatar_4,]
            .map(async key => {
                const get_object_command = new GetObjectCommand({
                    Bucket: process.env.BUCKET_NAME_OF_DEFAULT_AVATARS,
                    Key: key
                })
                let URL = ''
                await getSignedUrl(s3_client, get_object_command, { expiresIn: 3600 })
                    .then(url => {
                        URL = url
                    })
                    .catch(() => {
                        URL = ''
                    })
                return URL
            }))
        cl(default_avatars_urls)
        return default_avatars_urls
    }
    catch {
        return []
    }
}

export { get_s3_signed_url, get_s3_signed_urls_for_default_avatars }