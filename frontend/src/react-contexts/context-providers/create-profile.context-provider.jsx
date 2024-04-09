import { useState } from "react"
import { create_profile_context } from "../contexts/create-profile.context.js"

const CreateProfileContextProvider = props => {
    const [profile_details, set_profile_details] = useState({
        profile_img: null, profile_img_preview: '', location: '', what_brings_you_here: '', footer_btns_visibility: false,
        page1_visibility: true, page2_visibility: false
    })

    return (
        <create_profile_context.Provider value={{ profile_details, set_profile_details }}>
            {props.children}
        </create_profile_context.Provider>
    )
}

export { CreateProfileContextProvider }