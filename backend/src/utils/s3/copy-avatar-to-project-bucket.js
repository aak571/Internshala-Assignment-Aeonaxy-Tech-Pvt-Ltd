import { CopyObjectCommand } from "@aws-sdk/client-s3"
import { get_s3_client } from "./s3_credentials.js"

const send_avatar = async (get_object_signed_url, put_object_signed_url) => {
    try {
        const s3_client = get_s3_client()
        await s3_client.send(new CopyObjectCommand({
            CopySource: get_object_signed_url,
            Destination: put_object_signed_url
        }))
            .then(() => {
                return true
            })
            .catch(err => {
                return false
            })
    }
    catch {
        return false
    }
}

export { send_avatar }