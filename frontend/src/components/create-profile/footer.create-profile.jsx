import { useContext } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { create_profile_context } from '../../react-contexts/contexts/create-profile.context.js'

const FooterOfCreateProfile = () => {
    const { profile_details, set_profile_details } = useContext(create_profile_context)
    const navigate = useNavigate()

    const back_onclick_handler = () => {
        set_profile_details({
            ...profile_details, page1_visibility: true, page2_visibility: false, footer_btns_visibility: false
        })
    }

    const finish_onclick_handler = async () => {
        try {
            if (profile_details.profile_img) {
                set_profile_details({ ...profile_details, loader: false })
                const username = Cookies.get('username')
                const { name, type } = profile_details.profile_img
                await axios.post('https://internshala-assignment-aeonaxy-tech-pvt-55ys.onrender.com/api/v1/account/create/api/v1/profile/get_s3_presigned_url', { username, name, type })
                    .then(async res => {
                        const profile_id = res.data.body.profile_id
                        const profile_photo_name = res.data.body.profile_photo_name
                        await axios.put(res.data.body.s3_presigned_url, profile_details.profile_img)
                            .then(async () => {
                                await axios.put('https://internshala-assignment-aeonaxy-tech-pvt-55ys.onrender.com/api/v1/account/create/api/v1/profile/edit_profile', {
                                    profile_id, profile_photo_name, location: profile_details.location,
                                    what_brought_you_here: profile_details.what_brings_you_here
                                })
                                    .then(() => {
                                        /*Deleted the cookies that was set after account creation*/
                                        Cookies.remove('profile')

                                        set_profile_details({ ...profile_details, loader: false })

                                        /*Directing the user to the email verification as the next step*/
                                        navigate('/verify-email')
                                    })
                                    .catch(err => {
                                        set_profile_details({ ...profile_details, loader: false })

                                        //////Alert///////
                                    })
                            })
                            .catch(err => {
                                set_profile_details({ ...profile_details, loader: false })
                                //////Alert///////
                            })
                    })
                    .catch(err => {
                        set_profile_details({ ...profile_details, loader: false })
                        //////Alert///////
                    })
            }
            else {
                set_profile_details({ ...profile_details, loader: true })
                const profile_id = Cookies.get('profile')
                await axios.put('https://internshala-assignment-aeonaxy-tech-pvt-55ys.onrender.com/api/v1/account/create/api/v1/profile/edit_profile', {
                    profile_id, profile_photo_name: profile_details.avatar_name,
                    location: profile_details.location, what_brought_you_here: profile_details.what_brings_you_here
                })
                    .then(res => {
                        /*Deleted the cookies that was set after account creation*/
                        Cookies.remove('profile')
                        set_profile_details({ ...profile_details, loader: false })

                        /*Directing the user to the email verification as the next step*/
                        navigate('/verify-email')
                    })
                    .catch(err => {
                        //////Alert///////
                        set_profile_details({ ...profile_details, loader: false })
                    })
            }
        }
        catch {
            set_profile_details({ ...profile_details, loader: false })
            //////Alert///////
        }
    }

    return (
        <div>
            {profile_details.footer_btns_visibility && <div className='text-center mt-4 mb-4'>
                <button onClick={back_onclick_handler} className='bg-slate-300 w-20 rounded-lg h-10 hover:bg-slate-400 hover:text-white'>Back</button>
                <button onClick={finish_onclick_handler} disabled={!profile_details.what_brings_you_here}
                    className={`ml-5 bg-blue-400 w-28 rounded-lg h-10
                    ${(profile_details.what_brings_you_here) ? 'bg-blue-400 text-black' : 'bg-blue-200 text-slate-600'}
                    hover:${!(profile_details.what_brings_you_here) && 'cursor-not-allowed'}
                    hover:${(profile_details.what_brings_you_here) && 'bg-green-500 hover:text-white hover:rounded-3xl'}
                  `}>Finish</button>
            </div>}
        </div>
    )
}

export default FooterOfCreateProfile