import { S3Client } from '@aws-sdk/client-s3'

const get_s3_client = () => {
    const s3_client = new S3Client({
        region: 'ap-south-1',
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
        }
    })
    return s3_client
}

export { get_s3_client }