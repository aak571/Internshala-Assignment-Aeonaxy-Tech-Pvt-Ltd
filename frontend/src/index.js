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