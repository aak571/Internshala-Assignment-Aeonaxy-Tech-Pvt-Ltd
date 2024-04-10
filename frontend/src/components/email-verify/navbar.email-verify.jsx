import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Cookies from 'js-cookie'
import axios from 'axios'

const NavBar = () => {
    const [profile, set_profile] = useState({ profile_photo: null, location: '', what_brings_you_here: '', visibility: false })

    useEffect(() => {
        const get_profile = async () => {
            try {
                const username = Cookies.get('username')
                await axios.get(`http://localhost:5000/api/v1/profile/get_profile/${username}`)
                    .then(res => {
                        set_profile({
                            ...profile, profile_photo: res.data.body.profile_photo_url,
                            location: res.data.body.location, what_brings_you_here: res.data.body.what_brought_you_here
                        })
                    })
                    .catch(err => {
                        //////Alert/////
                    })
            }
            catch {
                //////Alert/////
            }
        }
        get_profile()
    }, [])

    const view_profile_onclick_handler = () => {
        set_profile({ ...profile, visibility: !profile.visibility })
    }

    return (
        <nav className="lg:flex lg:space-x-80 ">
            <nav className="mt-3 ml-4 mr-4 space-x-4">
                <label className="italic font-bold cursor-pointer text-2xl underline decoration-wavy text-green-600">Unsplash</label>
                <label className="text-lg cursor-pointer hover:text-orange-500">Inspiration</label>
                <label className="text-lg cursor-pointer hover:text-orange-500">Contributor</label>
                <label className="text-lg cursor-pointer hover:text-orange-500">Learn Photograph</label>
                <label className="text-lg cursor-pointer hover:text-orange-500">Go Pro</label>
                <label className="text-lg cursor-pointer hover:text-orange-500">Hire Photographers</label>
            </nav>

            <nav className="mt-3 flex space-x-4 ml-5 mr-5">
                <input type="text" placeholder=" Search" className="mt-3 h-10 rounded-lg bg-slate-200" />
                <FontAwesomeIcon className="mt-4 text-2xl text-blue-500" icon={faBagShopping} />
                <img className="w-16 h-16 border-2 border-blue-500 rounded-full" src={profile.profile_photo} />
                <div>
                    <button onClick={view_profile_onclick_handler} className='mt-3 bg-red-400 w-28 rounded-lg h-10 hover:bg-orange-500 hover:text-white'>View Profile</button>
                    {profile.visibility && <motion.div animate={{ x: -20, transition: { duration: 0.3 } }} className='border-4 border-green-400 bg-green-100 rounded-lg mt-4 mr-10 text-center p-5'>
                        <img className="w-20 h-20 border-2 border-blue-500 rounded-full mx-auto" src={profile.profile_photo} />
                        <div className='mt-5'>
                            <label className='font-semibold'>Location:</label>
                            <label className='ml-2'>{profile.location}</label>
                        </div>
                        <div className='mt-2'>
                            <label className='font-semibold'>Your need:</label>
                            <label className='ml-2'>{profile.what_brings_you_here}</label>
                        </div>
                    </motion.div>}
                </div>
            </nav>
        </nav>
    )
}

export default NavBar