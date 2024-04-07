import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAccount from "./components/pages/create-account.jsx"
import CreateProfile from "./components/pages/create-profile.jsx"
import EmailVerify from "./components/pages/email-verify.jsx"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<CreateAccount />} />
                    <Route path='/create-profile' element={<CreateProfile />} />
                    <Route path='/verify-email' element={<EmailVerify />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App