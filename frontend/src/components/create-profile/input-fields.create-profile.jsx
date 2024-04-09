import InputFieldsPage1 from './input_fields-page-1.create-profile.jsx'
import InputFieldsPage2 from './input_fields-page-2.create-profile.jsx'
import { CreateProfileContextProvider } from '../../react-contexts/context-providers/create-profile.context-provider.jsx'
import FooterOfCreateProfile from './footer.create-profile.jsx'

const InputFields = () => {
    return (
        <div>
            <CreateProfileContextProvider>
                <InputFieldsPage1 />
                <InputFieldsPage2 />
                <FooterOfCreateProfile />
            </CreateProfileContextProvider>
        </div>
    )
}

export default InputFields













