import { CreateAccountTermsAgreementContextProvider } from '../../react-contexts/context-providers/create-account-terms-agreement.context-provider.jsx'
import { motion } from 'framer-motion'
import InputFields from "./input-fields.create-account.jsx"
import { CreateProfileContextProvider } from '../../react-contexts/context-providers/create-profile.context-provider.jsx'

const CreateAccountForm = () => {
    return (
        <div>
            <motion.h1 animate={{ y: [-50, 0], transition: { duration: 1 } }} className="font-extrabold text-3xl mt-14  mr-3 ml-3 md:mr-60 md:ml-60 lg:ml-80 lg:mr-80">Sign up to <span className="italic underline decoration-wavy">Unsplash</span></motion.h1>
            <CreateAccountTermsAgreementContextProvider>
                <CreateProfileContextProvider>
                    <InputFields />
                </CreateProfileContextProvider>
            </CreateAccountTermsAgreementContextProvider>
        </div>
    )
}

export default CreateAccountForm