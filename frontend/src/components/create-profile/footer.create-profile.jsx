import { useContext } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { create_profile_context } from '../../react-contexts/contexts/create-profile.context.js'

const FooterOfCreateProfile = () => {
    const { profile_details, set_profile_details } = useContext(create_profile_context)

    const back_onclick_handler = () => {
        set_profile_details({
            ...profile_details, page1_visibility: true, page2_visibility: false, footer_btns_visibility: false
        })
    }

    const finish_onclick_handler = async () => {
        try {
            if (profile_details.profile_img) {
                const username = Cookies.get('username')
                const { name, type } = profile_details.profile_img
                await axios.post('http://localhost:5000/api/v1/profile/get_s3_presigned_url', { username, name, type })
                    .then(async res => {
                        const profile_id = res.data.body.profile_id
                        const profile_photo_name = res.data.body.profile_photo_name
                        // console.log(profile_id, profile_photo_name)
                        await axios.put(res.data.body.s3_presigned_url, profile_details.profile_img)
                            .then(async res => { ////Profile photo name has to be stored in react state/////
                                // console.log('Profile photo uploaded', res)
                                await axios.put('http://localhost:5000/api/v1/profile/edit_profile', {
                                    profile_id, profile_photo_name, location: profile_details.location,
                                    what_brought_you_here: profile_details.what_brings_you_here
                                })
                                    .then(res => {
                                        // console.log('Profile created', res)

                                    })
                                    .catch(err => {
                                        //////Alert///////
                                        console.log('Could not create profile', err)
                                    })
                            })
                            .catch(err => {
                                //////Alert///////
                                console.log('Could not upload Profile photo', err)
                            })
                    })
                    .catch(err => {
                        //////Alert///////
                        console.log('ERROR while creating signed url', err)
                    })
            }
            else {
                const username = Cookies.get('username')
                await axios.post('http://localhost:5000/api/v1/profile/upload_avatar_to_s3', {
                    username, name: profile_details.avatar_name
                })
                    .then(res => {
                        console.log('Avatar uploaded', res)
                    })
                    .catch(err => {
                        //////Alert///////
                        console.log('Avatar not uploaded', err)
                    })
            }
        }
        catch {
            //////Alert///////
        }
    }

    return (
        <div>
            {profile_details.footer_btns_visibility && <div className='text-center mt-4 mb-4'>
                <button onClick={back_onclick_handler} className='bg-slate-300 w-20 rounded-lg h-10 hover:bg-slate-400 hover:text-white'>Back</button>
                <button onClick={finish_onclick_handler} disabled={!profile_details.what_brings_you_here}
                    className={`ml-5 bg-blue-400 w-28 rounded-lg h-10
                    ${(profile_details.what_brings_you_here) ? 'bg-blue-400 text-black' : 'bg-blue-200 text-slate-400'}
                    hover:${!(profile_details.what_brings_you_here) && 'cursor-not-allowed'}
                    hover:${(profile_details.what_brings_you_here) && 'bg-green-500 hover:text-white hover:rounded-3xl'}
                  `}>Finish</button>
            </div>}
        </div>
    )
}

export default FooterOfCreateProfile