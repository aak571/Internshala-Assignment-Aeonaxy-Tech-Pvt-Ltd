import { create_account_terms_agreement_context } from '../../react-contexts/contexts/create-account-terms-agreement.context.js'
import { useContext } from 'react'

const TermsOfService = () => {
    const { are_terms_agreed, set_are_terms_agreed } = useContext(create_account_terms_agreement_context)

    const terms_agreement_onchange_handler = () => {
        set_are_terms_agreed({ ...are_terms_agreed, agreed: !are_terms_agreed.agreed })
    }

    return (
        <div className="flex mt-3">
            <input onChange={terms_agreement_onchange_handler} type="checkbox" className="h-7 w-7 bg-green-500 text-center"></input>
            <p className="ml-2">Creating an account means you're okay with our <span className="text-sm text-violet-700 hover:underline cursor-pointer">Terms of Service</span>, <span className="text-sm text-violet-700 hover:underline cursor-pointer">Privacy Policy</span>, and our default <span className="text-sm text-violet-700 hover:underline cursor-pointer">Notification Settings</span>.</p>
        </div>
    )
}

export default TermsOfService