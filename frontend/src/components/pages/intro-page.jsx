import LoginOption from "../create-account/login-option.create-account.jsx"
import { useNavigate } from 'react-router-dom'

const Intro = () => {
    const navigate = useNavigate()

    const create_account_onclick_handler = () => {
        navigate('/create-account')
    }

    return (
        <div>
            <h1 className="underline decoration-wavy text-3xl mx-auto p-5 font-bold text-green-500 italic text-center bg-green-200">Unsplash</h1>
            <p className="mt-10 text-center">We are very delighted to have you here. Please go ahead and create an account with us.</p>
            <div className="text-center mt-40">
                <button onClick={create_account_onclick_handler} className="bg-purple-400 rounded-3xl p-5 hover:w-52 hover:bg-orange-500 hover:text-white">Create Account</button>
            </div>
        </div>
    )
}

export default Intro