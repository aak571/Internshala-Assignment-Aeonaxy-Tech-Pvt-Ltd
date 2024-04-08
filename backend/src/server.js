import dotenv from 'dotenv'
import { connect_to_mongo_db } from "./db/index.js"
import { cl } from "./utils/console.log.js"
import { serve } from './app.js'

dotenv.config()

const initiate_server = async () => {
    await connect_to_mongo_db()
        .then(() => {
            try {
                serve.listen(process.env.SERVER_PORT, () => {
                    cl(`Server listening on port ${process.env.SERVER_PORT}.....`)
                })
            }
            catch {
                cl('Server not ready, please try again later') // display this in frontend
                process.exit(1)
            }
        })
}

initiate_server()

// Capitalise the user details after logging in
// Remove body parser
// Be very granular in sending the responses from server
// Optimise the code lines if you want
// Make two files in the Controllers, Routes
// dont allow spaces in username
// please add try catch to each and every await statements through out the project (FE and BE) and copy paste whatever is there in .catch() to the cath{}
// Put S3Client in a try catch block
// Replace the err of all the necessary else part
// Exclude fields that are not required in all the controllers
// Remove the profile photo if there is a problem in updating the profile_photo_name property in the profile collection