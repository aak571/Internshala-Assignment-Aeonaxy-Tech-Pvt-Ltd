import Description from "./description.create-account.jsx"

const CoverImage = () => {
    return (
        <div>
            {/* This a free image from 'Unsplash' */}
            <img className="h-screen" src="https://images.unsplash.com/photo-1597551681492-10c86e481548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover image with description" />
            {/* <img className="h-screen" src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww" alt="Cover image with description" /> */}
            <Description />
        </div>

    )
}

export default CoverImage


