import { create_account_terms_agreement_context } from "../contexts/create-account-terms-agreement.context.js"
import { useState } from "react"

const CreateAccountTermsAgreementContextProvider = props => {
    const [are_terms_agreed, set_are_terms_agreed] = useState({ agreed: false })

    return (
        <create_account_terms_agreement_context.Provider value={{ are_terms_agreed, set_are_terms_agreed }}>
            {props.children}
        </create_account_terms_agreement_context.Provider>
    )
}

export { CreateAccountTermsAgreementContextProvider }