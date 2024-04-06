import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faEnvelopeCircleCheck, faCopyright, faImage } from '@fortawesome/free-solid-svg-icons'

const EmailVerify = () => {
    return (
        <div>
            <nav className="flex space-x-80">
                <nav className="mt-3 ml-4 mr-4 space-x-4">
                    <label className="italic font-bold cursor-pointer text-2xl underline decoration-wavy text-green-600">Unsplash</label>
                    <label className="text-lg cursor-pointer hover:text-orange-500">Inspiration</label>
                    <label className="text-lg cursor-pointer hover:text-orange-500">Contributor</label>
                    <label className="text-lg cursor-pointer hover:text-orange-500">Learn Photograph</label>
                    <label className="text-lg cursor-pointer hover:text-orange-500">Go Pro</label>
                    <label className="text-lg cursor-pointer hover:text-orange-500">Hire Photographers</label>
                </nav>

                <nav className="mt-3 flex space-x-4 ml-5 mr-5">
                    <input type="text" placeholder=" Search" className="mt-1 h-10 rounded-lg bg-slate-200" />
                    <FontAwesomeIcon className="mt-3 text-2xl text-blue-500" icon={faBagShopping} />
                    <div className="w-12 h-12 border-2 border-blue-500 rounded-full "></div>
                    <button className='mt-1 bg-red-400 w-28 rounded-lg h-10 hover:bg-orange-500 hover:text-white'>Edit Profile</button>
                </nav>
            </nav>

            <div className="w-full mt-2 h-px border border-gray-200"></div>

            <div className='text-center mt-20'>
                <h1 className='font-bold text-3xl'>Please verify your email...</h1>
                <FontAwesomeIcon className="mt-5 text-3xl text-green-500" icon={faEnvelopeCircleCheck} />
                <p className='mt-5'>Please verify your email address. We've sent a confirmation email to:</p>
                <p className='mt-5'>................................@gmail.com</p>
                <p className='mt-5'>Click the confirmation link in that email to begin using <span className='underline decoration-wavy italic font-bold'>Unsplash</span></p>
                <p className='mt-5'>Didn't recieve the email? Check your Spam folder, it may have been caught by a filter.</p>
                <p>If you still don't see it, you can <span className='text-orange-500 hover:underline cursor-pointer'>resend the confirmation email</span>.</p>
                <p className='mt-5'>Wrong email address? <span className='text-purple-500 hover:underline cursor-pointer'>Change it</span>.</p>
            </div>

            <div className='mt-52 ml-5 mr-5 flex text-sm space-x-20'>
                <div className='w-72'>
                    <label className="italic font-bold cursor-pointer text-2xl underline decoration-wavy text-green-600">Unsplash</label>
                    <p className='mt-5'>Unsplash is world's best image platform where you can get high quality copyright-free images for absolutely free.</p>
                    <div className='flex space-x-1'>
                        <p className='font-bold cursor-pointer hover:text-red-500'>YouTube</p>
                        <p className='font-bold cursor-pointer hover:text-blue-400'>Twitter</p>
                        <p className='font-bold cursor-pointer hover:text-blue-500'>Facebook</p>
                        <p className='font-bold cursor-pointer hover:text-purple-500'>Instgram</p>
                        <p className='font-bold cursor-pointer hover:text-red-600'>Pinterest</p>
                    </div>
                </div>

                <div>
                    <label className="font-bold text-md">For Photographers</label>
                    <p className='mt-5 cursor-pointer hover:text-rose-400'>Go Pro!</p>
                    <p className='mt-2 cursor-pointer hover:text-rose-400'>Explore capturing images</p>
                    <p className='mt-2 cursor-pointer hover:text-rose-400'>Design blog</p>
                    <p className='mt-2 cursor-pointer hover:text-rose-400'>Overtime podcast</p>
                    <p className='mt-2 cursor-pointer hover:text-rose-400'>Playoffs</p>
                    <p className='mt-2 cursor-pointer hover:text-rose-400'>Weekly Warm-Up</p>
                    <p className='mt-2 cursor-pointer hover:text-rose-400'>Refer a Friend</p>
                    <p className='mt-2 cursor-pointer hover:text-rose-400'>Code of conduct</p>
                </div>

                <div>
                    <label className="font-bold text-md">Hire Photographers</label>
                    <p className='mt-5 cursor-pointer hover:text-purple-500'>Post a job opening</p>
                    <p className='mt-2 cursor-pointer hover:text-purple-500'>Post a freelance project</p>
                    <p className='mt-2 cursor-pointer hover:text-purple-500'>Search for photographers</p>
                    <p className='mt-2 cursor-pointer hover:text-purple-500'>Overtime podcast</p>
                    <p className='mt-5 cursor-pointer hover:text-purple-500 font-bold'>Brands</p>
                    <p className='mt-2 cursor-pointer hover:text-purple-500'>Advertise with us</p>
                </div>

                <div>
                    <label className="font-bold text-md">Company</label>
                    <p className='mt-5 cursor-pointer hover:text-blue-500'>About</p>
                    <p className='mt-2 cursor-pointer hover:text-blue-500'>Careers</p>
                    <p className='mt-2 cursor-pointer hover:text-blue-500'>Support</p>
                    <p className='mt-2 cursor-pointer hover:text-blue-500'>Media kit</p>
                    <p className='mt-2 cursor-pointer hover:text-blue-500'>Testimonials</p>
                    <p className='mt-2 cursor-pointer hover:text-blue-500'>API</p>
                    <p className='mt-2 cursor-pointer hover:text-blue-500'>Terms of service</p>
                    <p className='mt-2 cursor-pointer hover:text-blue-500'>Privacy policy</p>
                    <p className='mt-2 cursor-pointer hover:text-blue-500'>Cookie policy</p>
                </div>

                <div>
                    <label className="font-bold text-md">Directories</label>
                    <p className='mt-5 cursor-pointer hover:text-yellow-500'>Photography job</p>
                    <p className='mt-2 cursor-pointer hover:text-yellow-500'>Photographers for hire</p>
                    <p className='mt-2 cursor-pointer hover:text-yellow-500'>Freelance photographers for hire</p>
                    <p className='mt-2 cursor-pointer hover:text-yellow-500'>Tags</p>
                    <p className='mt-2 cursor-pointer hover:text-yellow-500'>Places</p>
                    <p className='mt-5 cursor-pointer hover:text-yellow-500 font-bold'>Photo assests</p>
                    <p className='mt-2 cursor-pointer hover:text-yellow-500'>Unsplash Marketplace</p>
                    <p className='mt-2 cursor-pointer hover:text-yellow-500'>Fontspring</p>
                    <p className='mt-2 cursor-pointer hover:text-yellow-500'>Font Squirrel</p>
                </div>

                <div>
                    <label className="font-bold text-md">Image Resources</label>
                    <p className='mt-5 cursor-pointer hover:text-green-500'>Freelancing</p>
                    <p className='mt-2 cursor-pointer hover:text-green-500'>Photo hiring</p>
                    <p className='mt-2 cursor-pointer hover:text-green-500'>Image Portfolio</p>
                    <p className='mt-2 cursor-pointer hover:text-green-500'>Image Education</p>
                    <p className='mt-2 cursor-pointer hover:text-green-500'>Creative Process</p>
                    <p className='mt-2 cursor-pointer hover:text-green-500'>Picture Industry Trends</p>
                </div>
            </div>

            <div className='mr-20 ml-20 mt-16 mb-5'>
                <div className="h-px border border-gray-200"></div>

                <div className='flex '>
                    <div className='flex p-4 '>
                        <FontAwesomeIcon className="mt-3 text-md text-slate-500" icon={faCopyright} />
                        <p className='mt-3 ml-3 text-xs'>2024 Unsplash, All rights reserved.</p>
                        <p className='mt-3 ml-96 text-xs '>20,501,853 captures unsplashed</p>
                        <FontAwesomeIcon className="text-sm mt-3 ml-2" icon={faImage} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailVerify