import { CopyObjectCommand, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3"
import { get_s3_client } from "./s3_credentials.js"
import { cl } from "../console.log.js"

const send_avatar = async (source_key, destination_key) => {
    try {
        console.log('source_key', source_key, '\n', 'destination_key', destination_key)
        const s3_client = get_s3_client() // Assuming get_s3_client() returns a configured S3 client

        // Extract object key from source URL if necessary (replace with your logic)
        // const sourceKey = extractObjectKey(sourceUrl);

        // Download the image from the source URL (pre-signed)
        const getObjectCommand = new GetObjectCommand({
            Bucket: process.env.BUCKET_NAME_OF_DEFAULT_AVATARS,
            Key: source_key
        }); // Extract bucket from URL
        const sourceImageData = await s3_client.send(getObjectCommand);

        // Upload the image to the destination bucket
        const putObjectCommand = new PutObjectCommand({
            Bucket: process.env.BUCKET_NAME,
            Key: destination_key,
            Body: sourceImageData.Body, // Use downloaded image data as body
        });

        await s3_client.send(putObjectCommand)
            .then(res => {
                return true
            })
            .catch(err => {
                console.log('ERROR_OMG', err)
                return false
            })
        console.log("Image sent to another bucket successfully!");
    }
    catch (error) {
        return false
        console.error("Error sending image:", error);
    }
















    // try {
    //     cl(get_object_signed_url, '\n', put_object_signed_url)
    //     const s3_client = get_s3_client()
    //     await s3_client.send(new CopyObjectCommand({
    //         Bucket: process.env.BUCKET_NAME,
    //         Key: key,
    //         CopySource: get_object_signed_url,
    //         Destination: put_object_signed_url
    //     }))
    //         .then(() => {
    //             return true
    //         })
    //         .catch(err => {
    //             cl('ERROR', err)
    //             return false
    //         })
    // }
    // catch {
    //     return false
    // }
}

export { send_avatar }