import react_dom from 'react-dom/client'

const MainComponent = () => {
    return (
        <div>
            Aakash
        </div>
    )
}

react_dom.createRoot(document.getElementById('rootComponent')).render(<MainComponent />)

// Remove Bootstrap CDN's