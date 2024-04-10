import InputFieldsPage1 from './input_fields-page-1.create-profile.jsx'
import InputFieldsPage2 from './input_fields-page-2.create-profile.jsx'
import { CreateProfileContextProvider } from '../../react-contexts/context-providers/create-profile.context-provider.jsx'
import FooterOfCreateProfile from './footer.create-profile.jsx'
import { RingLoader } from 'react-spinners'
import { useContext } from 'react'
import { create_profile_context } from '../../react-contexts/contexts/create-profile.context.js'

const InputFields = () => {
    const { profile_details, set_profile_details } = useContext(create_profile_context)

    return (
        <div>
            <RingLoader className='mt-20 mx-auto' loading={profile_details.loader} color="#36d7b7" size={300} speedMultiplier={2} />

            {!profile_details.loader && <CreateProfileContextProvider>
                <InputFieldsPage1 />
                <InputFieldsPage2 />
                <FooterOfCreateProfile />
            </CreateProfileContextProvider>}
        </div>
    )
}

export default InputFields













