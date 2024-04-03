import { PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { get_s3_client } from "./s3_credentials.js"
import { cl } from "../console.log.js"

const get_s3_signed_url_for_image_upload = async (key, content_type) => {
    const s3_client = get_s3_client()
    const put_object_command = new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: key,
        ContentType: content_type
    })
    let URL = ''
    await getSignedUrl(s3_client, put_object_command)
        .then(url => {
            URL = url
        })
    return URL
}

export { get_s3_signed_url_for_image_upload }