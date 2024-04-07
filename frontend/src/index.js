import react_dom from 'react-dom/client'
import './index.css'
import App from './app.js'

const MainComponent = () => {
    return (
        <div>
            <App />
        </div>
    )
}

react_dom.createRoot(document.getElementById('rootComponent')).render(<MainComponent />)

// Remove Bootstrap CDN's
// Unsplash has to be clickable to go to the intro page
// Please make separate components for email-verify page
// Password strength
// Responsive