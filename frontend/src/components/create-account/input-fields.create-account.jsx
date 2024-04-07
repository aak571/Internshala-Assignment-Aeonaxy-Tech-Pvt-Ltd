import { create_account_terms_agreement_context } from '../../react-contexts/contexts/create-account-terms-agreement.context.js'
import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import GoogleTermsAndConditions from "./google-terms-and-conditions.create-accout.jsx"
import TermsOfService from "./terms-of-service.create-account.jsx"
import axios from 'axios'

const InputFields = () => {
    const { are_terms_agreed } = useContext(create_account_terms_agreement_context)
    const [account_details, set_account_details] = useState({ name: '', username: '', email: '', password: '' })

    const account_details_onchange_handler = e => {
        set_account_details({ ...account_details, [e.target.id]: e.target.value.trim() })
    }

    const create_account_onclick_handler = async () => {

    }

    return (
        <div className="ml-60 mr-60 bg-red-100 mt-10">

            <div className="md:flex md:justify-between ">
                <motion.div animate={{ y: [-20, 0], transition: { duration: 0.3, delay: 0.3 } }} className="flex flex-col bg-yellow-200 w-64">
                    <label className="font-bold bg-blue-200 text-start">Name</label>
                    <input id='name' onChange={account_details_onchange_handler} className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
                </motion.div>

                <motion.div animate={{ y: [-20, 0], transition: { duration: 0.3, delay: 0.6 } }} className="flex flex-col bg-yellow-200 w-64">
                    <label className="font-bold bg-blue-200 text-start">Username</label>
                    <input id='username' onChange={account_details_onchange_handler} className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
                </motion.div>
            </div>

            <motion.div animate={{ y: [-20, 0], transition: { duration: 0.3, delay: 0.9 } }} className="flex flex-col mt-7 bg-yellow-200">
                <label className="font-bold bg-blue-200 text-start">Email</label>
                <input id='email' onChange={account_details_onchange_handler} className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
            </motion.div>

            <motion.div animate={{ y: [-20, 0], transition: { duration: 0.3, delay: 1.2 } }} className="flex flex-col mt-7 bg-yellow-200">
                <label className="font-bold bg-blue-200 text-start">Password</label>
                <input id='password' onChange={account_details_onchange_handler} type="password" className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
            </motion.div>

            <TermsOfService />

            <div animate={{ y: [-20, 0], transition: { duration: 0.5, delay: 3 } }} className="bg-slate-600 mt-7">
                <button onClick={create_account_onclick_handler} disabled className={`p-2 rounded-lg w-40 cursor-pointer
                ${(account_details.name && account_details.username && account_details.email && account_details.password && are_terms_agreed.agreed) ? 'text-black bg-blue-500': 'text-slate-500 bg-blue-400'}
                hover:${!(account_details.name && account_details.username && account_details.email && account_details.password && are_terms_agreed.agreed) && 'cursor-not-allowed'}
                hover:${(account_details.name && account_details.username && account_details.email && account_details.password && are_terms_agreed.agreed) && 'bg-green-400 '}
                hover:${(account_details.name && account_details.username && account_details.email && account_details.password && are_terms_agreed.agreed) && 'text-white'}
                hover:${(account_details.name && account_details.username && account_details.email && account_details.password && are_terms_agreed.agreed) && 'rounded-full '}`}>Create Account</button>
            </div>

            <GoogleTermsAndConditions />

        </div>
    )
}

export default InputFields