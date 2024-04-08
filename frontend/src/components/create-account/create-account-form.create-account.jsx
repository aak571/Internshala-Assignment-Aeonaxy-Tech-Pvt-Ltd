import { CreateAccountTermsAgreementContextProvider } from '../../react-contexts/context-providers/create-account-terms-agreement.context-provider.jsx'
import { motion } from 'framer-motion'
import InputFields from "./input-fields.create-account.jsx"

const CreateAccountForm = () => {
    return (
        <div>
            <motion.h1 animate={{ y: [-50, 0], transition: { duration: 1 } }} className="font-extrabold text-3xl mt-5 ml-60 mr-60">Sign up to <span className="italic underline decoration-wavy">Unsplash</span></motion.h1>
            <CreateAccountTermsAgreementContextProvider>
                <InputFields />
            </CreateAccountTermsAgreementContextProvider>
        </div>
    )
}

export default CreateAccountForm