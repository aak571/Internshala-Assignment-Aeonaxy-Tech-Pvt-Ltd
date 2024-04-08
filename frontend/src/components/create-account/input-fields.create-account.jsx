import { useState, useContext } from 'react'
import { create_account_terms_agreement_context } from '../../react-contexts/contexts/create-account-terms-agreement.context.js'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RingLoader } from 'react-spinners'
import GoogleTermsAndConditions from "./google-terms-and-conditions.create-accout.jsx"
import TermsOfService from "./terms-of-service.create-account.jsx"
import axios from 'axios'

const InputFields = () => {
    const [account_details, set_account_details] = useState({ name: '', username: '', email: '', password: '' })
    const { are_terms_agreed, set_are_terms_agreed } = useContext(create_account_terms_agreement_context)
    // const { response_messages, set_response_messages } = useContext(response_messages_context)
    const [response_messages, set_response_messages] = useState({
        success: false, success_message: '', failure: false, failure_message: '', notify: false, notification: '',
        loader: false

    })
    const navigate = useNavigate()

    const account_details_onchange_handler = e => {
        /*****This if-elseif is to prevent user from entering blank spaces in 'Email' and 'Password' fields******/
        if (e.target.id === 'email')
            document.getElementById(e.target.id).value = e.target.value.split(' ').join('')
        else if (e.target.id === 'password')
            document.getElementById(e.target.id).value = e.target.value.split(' ').join('')

        set_account_details({ ...account_details, [e.target.id]: e.target.value })
    }

    // console.log(response_messages)

    const create_account_onclick_handler = async () => {
        set_response_messages({ ...response_messages, success: false, success_message: '', failure: false, failure_message: '', notify: false, notification: '', loader: true })
        try {
            await axios.post('http://localhost:5000/api/v1/account/create', account_details)
                .then(res => {
                    if (res.data.status === 200) {
                        /**This will navigate the user to 'Profile Creation Page' after successfully creating an account**/
                        navigate('/build-profile')

                        /*************Reseting the states (Just as good programming practice)**********/
                        set_response_messages({ ...response_messages, loader: false })
                        set_account_details({ ...account_details, name: '', username: '', email: '', password: '' })
                        set_are_terms_agreed({ ...are_terms_agreed, agreed: false })

                        // set_response_messages({ ...response_messages, success: true, success_message: res.data.message })
                        // console.log(res.data)
                    }
                    else {
                        /***********Reseting the states (Just as good programming practice)***********/
                        set_response_messages({ ...response_messages, loader: false })
                        set_account_details({ ...account_details, name: '', username: '', email: '', password: '' })
                        set_are_terms_agreed({ ...are_terms_agreed, agreed: false })
                    }
                })
                .catch(err => {
                    /*****This condition is to check if the details entered already exixts in our database or not*****/
                    if (err.response.data.body.code === 11000) {
                        /*******Reseting the states (Just as good programming practice)******/
                        set_response_messages({
                            ...response_messages, failure: true, failure_message: 'Looks like we already have an user with same Username or Email ID or Password, please enter something different',
                            loader: false
                        })
                        set_account_details({ ...account_details, name: '', username: '', email: '', password: '' })
                        set_are_terms_agreed({ ...are_terms_agreed, agreed: false })
                    }
                    else {
                        /**********Reseting the states (Just as good programming practice)*******/
                        set_response_messages({
                            ...response_messages, failure: true, failure_message: err.response.data.message,
                            loader: false
                        })
                        set_account_details({ ...account_details, name: '', username: '', email: '', password: '' })
                        set_are_terms_agreed({ ...are_terms_agreed, agreed: false })
                    }
                })
        }
        catch {
            /***********Reseting the states (Just as good programming practice)***********/
            set_response_messages({
                ...response_messages, failure: true,
                failure_message: 'Thank you for choosing our platform, but we have temporarily stopped our service. Please get back to us after sometime.', loader: false
            })
            set_account_details({ ...account_details, name: '', username: '', email: '', password: '' })
            set_are_terms_agreed({ ...are_terms_agreed, agreed: false })
            // failure message
        }
    }

    console.log(account_details, are_terms_agreed.agreed)

    return (
        <div className="ml-60 mr-60">

            <RingLoader className='mt-20 mx-auto' loading={response_messages.loader} color="#36d7b7" size={300} speedMultiplier={2} />

            {!response_messages.loader && <div>

                {response_messages.failure && <motion.p animate={{ x: [-30, 0, -30, 0, -30, 0, -30, 0], transition: { duration: 0.5 } }} className="text-sm mt-5 text-red-500">{response_messages.failure_message}</motion.p>}

                <div className="md:flex md:justify-between mt-10">
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

                <div animate={{ y: [-20, 0], transition: { duration: 0.5, delay: 3 } }} className="mt-7">
                    <button onClick={create_account_onclick_handler}
                        /**The below line is to enable the 'Create Account' button only after the user fills all the fields**/
                        disabled={!(account_details.name && account_details.username && account_details.email && account_details.password && are_terms_agreed.agreed)}

                        className={`p-2 rounded-lg w-40
                    ${(account_details.name && account_details.username && account_details.email && account_details.password && are_terms_agreed.agreed) ? 'text-black bg-blue-500' : 'text-slate-500 bg-blue-400'}
                    hover: ${!(account_details.name && account_details.username && account_details.email && account_details.password && are_terms_agreed.agreed) && 'cursor-not-allowed'}
                    hover:${(account_details.name && account_details.username && account_details.email && account_details.password && are_terms_agreed.agreed) && 'bg-green-400 '}
                    hover:${(account_details.name && account_details.username && account_details.email && account_details.password && are_terms_agreed.agreed) && 'text-white'}
                    hover:${(account_details.name && account_details.username && account_details.email && account_details.password && are_terms_agreed.agreed) && 'rounded-3xl '}`}>Create Account</button>
                </div>

                <GoogleTermsAndConditions />

            </div>}
        </div>
    )
}

export default InputFields