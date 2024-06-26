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