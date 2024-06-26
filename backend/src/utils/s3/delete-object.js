import { DeleteObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { get_s3_client } from "./s3_credentials.js"

const s3_delete_image = async key => {
    const s3_client = get_s3_client()
    const delete_object_command = new DeleteObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: key
    })
    await s3_client.send(delete_object_command)
        .then(() => {
            return true
        })
        .catch(() => {
            return false
        })
}

export { s3_delete_image }