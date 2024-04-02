import mongoose from "mongoose"
import { cl } from "../utils/console.log.js"

const connect_to_mongo_db = async () => {
    await mongoose.connect(`${process.env.MONGO_DB_CONNECTION_URI}/${process.env.DATABASE_NAME}`)
        .then(() => {
            cl('Yes, Connected to Mongo DB successfully !!!')
        })
        .catch(() => {
            cl("Unfortunately couldn't connect to Mongo DB")
            process.exit(1)
        })
}

export { connect_to_mongo_db }