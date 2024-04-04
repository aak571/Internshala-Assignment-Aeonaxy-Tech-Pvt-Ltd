import axios from "axios"
import { useState } from "react"
import { cl } from '../console.log.js'

const BuildProfile = () => {
    const [profile_details, set_profile_details] = useState({ location: '', what_brought_you_here: '' })
    const [profile_image, set_profile_image] = useState({ image: null })

    const profile_details_onchange_handler = e => {
        set_profile_details({ ...profile_details, [e.target.id]: e.target.value })
    }

    const profile_image_onchange_hander = e => {
        set_profile_image({ ...profile_image, image: e.target.files[0] })
    }

    /****************Please use the two controllers according to whethwer profile photo changed or not******************/

    const finish_onclick_handler = async () => {
        const { location, what_brought_you_here } = profile_details
        const { name, type } = profile_image.image
        await axios.post('http://localhost:5000/api/v1/user/get_s3_presigned_url', { username: 'aaku kavi', name, type })
            .then(async res => {
                const profile_id = res.data.body.profile_id
                const profile_photo_name = res.data.body.profile_photo_name
                // cookies can be sent from the server as well. But in this case I chose to set it from here.
                // document.cookie = `${res.data.body.cookie_key}=${res.data.body.cookie_value}`

                // try removing the header
                await axios.put(res.data.body.s3_presigned_url, profile_image.image, { headers: { "Content-Type": "multipart/form-data" } })
                    .then(async res => {
                        // *******please give name_old and profile_photo_name some value******
                        await axios.put('http://localhost:5000/api/v1/user/edit_profile', { profile_id, name_old: 'aaku kavi-wt.jpeg', location, what_brought_you_here, profile_photo_name })
                            .then(res => {
                                cl(res.data.message)
                            })
                            .catch(err => {
                                cl('Profile not updated due to some issue')
                            })
                    })
                    .catch(err => {
                        cl(`Could not create profile, please try agian: ${err}`)
                    })
            })
            .catch(err => {
                cl('ERRROR', err)
            })
    }

    return (
        <div className="d-flex flex-column col-sm-6 mx-auto mt-5">
            <input onChange={profile_image_onchange_hander} type="file" placeholder="Choose an image"></input>
            <input id="location" onChange={profile_details_onchange_handler} placeholder="location ?" className="mt-5"></input>
            <input id="what_brought_you_here" onChange={profile_details_onchange_handler} placeholder="what brought you here ?" className="mt-5"></input>
            <button onClick={finish_onclick_handler} className="btn border mt-5">Finish</button>

            {/* <img src="https://profile-images-internshala-assignment.s3.ap-south-1.amazonaws.com/aaku%20kavi-wt.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUBKKK74PBXT3YQX2%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T092450Z&X-Amz-Expires=900&X-Amz-Signature=4accc98e1663bd7426f174b5069e619b3c33cc8ebadf38dcc2f5efa5c9fbfa3a&X-Amz-SignedHeaders=host&x-id=GetObject" alt="Image from Internshala Assignment Profile" /> */}

        </div>
    )
}

export default BuildProfile



// function setCookie(name, value, expires = 7, path = '/', domain = '') {
//     const date = new Date();
//     date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
//     const expiresString = `expires=${date.toUTCString()}`;
//     const cookieString = `${name}=${encodeURIComponent(value)}; ${expiresString}; path=${path}; domain=${domain}`;
//     document.cookie = cookieString;
//   }

//   setCookie('theme', 'dark', 30); // Set cookie for 30 days
