import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateAccountTermsAgreementContextProvider } from
    './react-contexts/context-providers/create-account-terms-agreement.context-provider.jsx'
import CreateAccount from "./components/pages/create-account.jsx"
import CreateProfile from "./components/pages/create-profile.jsx"
import EmailVerify from "./components/pages/email-verify.jsx"
import Intro from './components/pages/intro-page.jsx'
import PageNotFound from './components/pages/page-not-found.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    {/* <Route index element={<CreateAccount />} /> */}
                    <Route index element={<Intro />} />
                    <Route path='create-account' element={<CreateAccount />} />
                    <Route path='build-profile' element={<CreateProfile />} />
                    <Route path='verify-email' element={<EmailVerify />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App