import { GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { get_s3_client } from "./s3_credentials.js"
import { cl } from "../console.log.js"

const get_s3_signed_url = async (key) => {
    const s3_client = get_s3_client()
    const get_object_command = new GetObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: key
    })
    let URL = ''
    await getSignedUrl(s3_client, get_object_command)
        .then(url => {
            URL = url
        })
        .catch(() => {
            URL = ''
        })
    return URL
}

export { get_s3_signed_url }