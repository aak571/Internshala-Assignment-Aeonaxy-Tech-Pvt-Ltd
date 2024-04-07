import CoverImage from "../create-account/cover-image.create-account.jsx"
import CreateAccountForm from "../create-account/create-account-form.create-account.jsx"
import LoginOption from "../create-account/login-option.create-account.jsx"
import { motion } from 'framer-motion'

const CreateAccount = () => {
    return (
        <div className="md:flex">
            <motion.div animate={{ x: [-100, 0], transition: { duration: 1 } }} className="w-3/6">
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

// https://images.unsplash.com/photo-1597551681492-10c86e481548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D