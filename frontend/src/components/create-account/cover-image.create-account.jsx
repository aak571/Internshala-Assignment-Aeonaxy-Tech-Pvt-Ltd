import Description from "./description.create-account.jsx"

const CoverImage = () => {
    return (
        <div>
            {/********This is an image from 'Unsplash'***********/}
            <img className="h-screen " src="https://images.unsplash.com/photo-1597551681492-10c86e481548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover image with description" />

            <Description />
        </div>

    )
}

export default CoverImage


