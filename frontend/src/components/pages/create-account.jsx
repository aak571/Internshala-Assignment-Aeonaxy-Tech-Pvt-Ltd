import CoverImage from "../create-account/cover-image.create-account.jsx"
import CreateAccountForm from "../create-account/create-account-form.create-account.jsx"
import LoginOption from "../create-account/login-option.create-account.jsx"
import { motion } from 'framer-motion'

const CreateAccount = () => {
    return (
        <div className="lg:flex">
            <motion.div animate={{ x: [-100, 0], transition: { duration: 1 } }} className="lg:w-screen">
                <CoverImage />
            </motion.div>
            <div className="w-screen h-screen">
                <LoginOption />
                <CreateAccountForm />
            </div>
        </div>
    )
}

export default CreateAccount