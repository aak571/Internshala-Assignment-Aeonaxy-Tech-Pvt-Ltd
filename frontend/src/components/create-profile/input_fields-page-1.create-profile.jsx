import { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faRightLong, faCircleXmark, faL } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import axios from 'axios'
import {
    default_avatars_variants_1, default_avatars_variants_2, default_avatars_variants_3,
    default_avatars_variants_4, default_avatars_variants_5
} from '../../animation-configs/default-avatars.animation-configs.js'
import { create_profile_context } from '../../react-contexts/contexts/create-profile.context.js'

const InputFieldsPage1 = () => {
    const [default_avatar, set_default_avatar] = useState({
        visibility: false, signed_url_1: '', signed_url_2: '', signed_url_3: '', signed_url_4: '',
    })
    const { profile_details, set_profile_details } = useContext(create_profile_context)

    useEffect(() => {
        const get_default_avatars = async () => {
            try {
                await axios.get('https://internshala-assignment-aeonaxy-tech-pvt-55ys.onrender.com/api/v1/profile/get_signed_urls_for_default_avatars')
                    .then(res => {
                        set_default_avatar({
                            ...default_avatar, signed_url_1: res.data.body[0], signed_url_2: res.data.body[1],
                            signed_url_3: res.data.body[2], signed_url_4: res.data.body[3],
                        })
                    })
                    .catch(err => {
                        /****Handle with Alerts******/
                    })
            }
            catch {
                /****Handle with Alerts******/
            }
        }
        get_default_avatars()
    }, [])

    const profile_pic_onchange_handler = e => {
        set_profile_details({
            ...profile_details, profile_img: e.target.files[0],
            profile_img_preview: URL.createObjectURL(e.target.files[0]), avatar_signed_url: '', avatar_name: ''
        })
    }

    const show_default_avatars_onclick_handler = () => {
        set_default_avatar({ ...default_avatar, visibility: true })
    }

    const close_default_avatars_onclick_handler = () => {
        set_default_avatar({ ...default_avatar, visibility: false })
    }

    const default_avatar_onclick_handler = async e => {
        if (e.target.id === 'avatar-1') {
            document.getElementById('profile-img').src = default_avatar.signed_url_1
            set_profile_details({
                ...profile_details, avatar_signed_url: default_avatar.signed_url_1, profile_img: null,
                profile_img_preview: '', avatar_name: 'default-avatar-woman-1.jpg'
            })
        }
        else if (e.target.id === 'avatar-2') {
            document.getElementById('profile-img').src = default_avatar.signed_url_2
            set_profile_details({
                ...profile_details, avatar_signed_url: default_avatar.signed_url_2, profile_img: null,
                profile_img_preview: '', avatar_name: 'default-avatar-woman-2.jpg'
            })
        }
        else if (e.target.id === 'avatar-3') {
            document.getElementById('profile-img').src = default_avatar.signed_url_3
            set_profile_details({
                ...profile_details, avatar_signed_url: default_avatar.signed_url_3, profile_img: null,
                profile_img_preview: '', avatar_name: 'default-avatar-man-1.jpg'
            })
        }
        else if (e.target.id === 'avatar-4') {
            document.getElementById('profile-img').src = default_avatar.signed_url_4
            set_profile_details({
                ...profile_details, avatar_signed_url: default_avatar.signed_url_4, profile_img: null,
                profile_img_preview: '', avatar_name: 'default-avatar-man-2.jpg'
            })
        }
    }

    const enter_location_onchange_handler = e => {
        set_profile_details({ ...profile_details, location: e.target.value })
    }

    const next_onclick_handler = () => {
        set_profile_details({
            ...profile_details, page1_visibility: false, page2_visibility: true, footer_btns_visibility: true
        })
    }

    return (
        <div>
            {profile_details.page1_visibility && <div className="mt-14 ml-2 mr-2 lg:ml-96 lg:mr-96 ">
                <label className='font-bold text-lg'>Add a Profile Pic</label>
                {/* This is a Font-Awesome-icon */}
                <FontAwesomeIcon className=" ml-3 text-2xl text-blue-500" icon={faCamera} />

                <div >
                    <div className='lg:flex '>
                        <img id='profile-img' src={(profile_details.profile_img_preview) ? profile_details.profile_img_preview : profile_details.avatar_signed_url} className="mt-4 w-28 h-28 border-2 border-blue-500 border-dashed rounded-full " />
                        <div className='mt-8 ml-10 flex flex-col '>
                            <input type='file' onChange={profile_pic_onchange_handler} accept='image/*' className='lg:ml-0 text-white italic text-sm rounded-lg border-blue-500 border-2 cursor-pointer w-48 bg-green-400' ></input>
                            <div className='flex'>
                                <FontAwesomeIcon className='text-blue-500 mt-3 text-sm' icon={faRightLong} />
                                <p onClick={show_default_avatars_onclick_handler} className='mt-1 ml-2 hover:text-green-500 cursor-pointer'>Or you can choose our defualt avatar</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-1 mb-5 lg:space-x-3 lg:flex'>
                        <motion.img id='avatar-1' onClick={default_avatar_onclick_handler} animate={(default_avatar.visibility) ? 'appear' : 'disappear'} variants={default_avatars_variants_1} className="w-24 h-24 border-2 border-black  rounded-full cursor-pointer hover:border-blue-500" src={default_avatar.signed_url_1} alt='avatar 1' />
                        <motion.img id='avatar-2' onClick={default_avatar_onclick_handler} animate={(default_avatar.visibility) ? 'appear' : 'disappear'} variants={default_avatars_variants_2} className="w-24 h-24 border-2 border-black  rounded-full cursor-pointer hover:border-blue-500" src={default_avatar.signed_url_2} alt='avatar 2' />
                        <motion.img id='avatar-3' onClick={default_avatar_onclick_handler} animate={(default_avatar.visibility) ? 'appear' : 'disappear'} variants={default_avatars_variants_3} className="w-24 h-24 border-2 border-black  rounded-full cursor-pointer hover:border-blue-500" src={default_avatar.signed_url_3} alt='avatar 3' />
                        <motion.img id='avatar-4' onClick={default_avatar_onclick_handler} animate={(default_avatar.visibility) ? 'appear' : 'disappear'} variants={default_avatars_variants_4} className="w-24 h-24 border-2 border-black  rounded-full cursor-pointer hover:border-blue-500" src={default_avatar.signed_url_4} alt='avatar 4' />
                        <motion.div animate={(default_avatar.visibility) ? 'appear' : 'disappear'} variants={default_avatars_variants_5}>
                            <FontAwesomeIcon onClick={close_default_avatars_onclick_handler} className='mt-1 ml-2 text-lg hover:text-red-500 cursor-pointer hover:text-xl' icon={faCircleXmark} />
                        </motion.div>
                    </div>
                </div>

                <div className='mt-10 bg-red-200'>
                    <p className='font-bold text-lg'>Add your Location</p>
                    <input onChange={enter_location_onchange_handler} value={profile_details.location} className='mt-5 border-b border-black h-10 w-full focus:outline-none focus:right-0 focus:border-blue-500' placeholder='Enter a location'></input>
                </div>

                <div className='mt-14 bg-red-500 mb-2'>
                    <button onClick={next_onclick_handler} disabled={!((profile_details.profile_img || profile_details.avatar_name) && profile_details.location)}
                        className={` w-40 rounded-lg h-10
                        ${((profile_details.profile_img || profile_details.avatar_name) && profile_details.location) ? 'bg-green-400 text-black' : 'bg-green-200 text-slate-400'}
                        hover:${!((profile_details.profile_img || profile_details.avatar_name) && profile_details.location) && 'cursor-not-allowed'}
                        hover:${((profile_details.profile_img || profile_details.avatar_name) && profile_details.location) && 'bg-green-500'}
                        hover:${((profile_details.profile_img || profile_details.avatar_name) && profile_details.location) && 'text-white'}`}>Next</button>
                </div>
            </div>}
        </div>
    )
}

export default InputFieldsPage1