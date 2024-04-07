import { motion } from 'framer-motion'
import GoogleTermsAndConditions from "./google-terms-and-conditions.create-accout"
import TermsOfService from "./terms-of-service.create-account"

const InputFields = () => {
    return (
        <div className="ml-60 mr-60 bg-red-100 mt-10">

            <div className="md:flex md:justify-between ">
                <motion.div animate={{ y: [-50, 0], transition: { duration: 1, delay: 0.5 } }} className="flex flex-col bg-yellow-200 w-64">
                    <label className="font-bold bg-blue-200 text-start">Name</label>
                    <input className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
                </motion.div>

                <motion.div animate={{ y: [-50, 0], transition: { duration: 1, delay: 1 } }} className="flex flex-col bg-yellow-200 w-64">
                    <label className="font-bold bg-blue-200 text-start">Username</label>
                    <input className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
                </motion.div>
            </div>

            <motion.div animate={{ y: [-50, 0], transition: { duration: 1, delay: 1.5 } }} className="flex flex-col mt-7 bg-yellow-200">
                <label className="font-bold bg-blue-200 text-start">Email</label>
                <input className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
            </motion.div>

            <motion.div animate={{ y: [-50, 0], transition: { duration: 1, delay: 2 } }} className="flex flex-col mt-7 bg-yellow-200">
                <label className="font-bold bg-blue-200 text-start">Password</label>
                <input type="password" className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
            </motion.div>

            <TermsOfService  />

            <div animate={{ y: [-50, 0], transition: { duration: 1, delay: 2.5 } }} className="bg-slate-600 mt-7">
                <button className="bg-blue-400 p-2 rounded-lg w-40 hover:bg-green-400 hover:text-white hover:rounded-full">Create Account</button>
            </div>

            <GoogleTermsAndConditions />

        </div>
    )
}

export default InputFields