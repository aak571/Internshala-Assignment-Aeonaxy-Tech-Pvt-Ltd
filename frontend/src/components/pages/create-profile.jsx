import { CreateProfileContextProvider } from "../../react-contexts/context-providers/create-profile.context-provider.jsx"
import Headers from "../create-profile/headers.create-profile.jsx"
import InputFields from "../create-profile/input-fields.create-profile.jsx"

const CreateProfile = () => {

    return (
        <div>
            <Headers />
            <CreateProfileContextProvider>
                <InputFields />
            </CreateProfileContextProvider>
        </div>
    )
}

export default CreateProfile