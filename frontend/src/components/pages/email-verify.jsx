import NavBar from '../email-verify/navbar.email-verify.jsx'
import Body from '../email-verify/body.email-verify.jsx'
import Details from '../email-verify/details.email-verify.jsx'
import Footer from '../email-verify/footer.email-verify.jsx'
import NavBarLine from '../email-verify/navbar-line.email-verify.jsx'
import FooterLine from '../email-verify/footer-line.email-verify.jsx'

const EmailVerify = () => {
    return (
        <div>
            <NavBar />
            <NavBarLine />
            <Body />
            <Details />
            <FooterLine />
            <Footer />
        </div>
    )
}

export default EmailVerify