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

    const finish_onclick_handler = async () => {
        const { location, what_brought_you_here } = profile_details
        const { name, type } = profile_image.image
        await axios.post('http://localhost:5000/api/v1/user/profile_build', { location, what_brought_you_here, username: 'aakukavi', name, type })
            .then(async res => {
                await axios.put(res.data.body, profile_image.image, { headers: { "Content-Type": "multipart/form-data" } })
                    .then(res => {
                        cl(`Profile created: ${res}`)
                    })
                    .catch(err => {
                        cl(`Could not create profile, please try agian: ${err}`)
                    })
            })
            .catch(err => {
                cl(err)
            })
    }

    return (
        <div className="d-flex flex-column col-sm-6 mx-auto mt-5">
            <input onChange={profile_image_onchange_hander} type="file" placeholder="Choose an image"></input>
            <input id="location" onChange={profile_details_onchange_handler} placeholder="location ?" className="mt-5"></input>
            <input id="what_brought_you_here" onChange={profile_details_onchange_handler} placeholder="what brought you here ?" className="mt-5"></input>
            <button onClick={finish_onclick_handler} className="btn border mt-5">Finish</button>
        </div>
    )
}

export default BuildProfile