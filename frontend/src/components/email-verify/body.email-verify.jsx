import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Body = () => {
    return (
        <div className='text-center mt-20'>
            <h1 className='font-bold text-3xl'>Please verify your email...</h1>
            <FontAwesomeIcon className="mt-5 text-3xl text-green-500" icon={faEnvelopeCircleCheck} />
            <p className='mt-5'>Please verify your email address. We've sent a confirmation email</p>
            <p className='mt-5'>Click the confirmation link in that email to begin using <span className='underline decoration-wavy italic font-bold'>Unsplash</span></p>
            <p className='mt-5'>Didn't recieve the email? Check your Spam folder, it may have been caught by a filter.</p>
            <p>If you still don't see it, you can <span className='text-orange-500 hover:underline cursor-pointer'>resend the confirmation email</span>.</p>
            <p className='mt-5'>Wrong email address? <span className='text-purple-500 hover:underline cursor-pointer'>Change it</span>.</p>
        </div>
    )
}

export default Body