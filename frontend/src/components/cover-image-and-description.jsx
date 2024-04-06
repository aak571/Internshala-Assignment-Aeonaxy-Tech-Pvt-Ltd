const CoverImageAndDescription = () => {
    return (
        <div className="md:flex">
            <div className="w-3/6 ">
                {/* This a free image from 'Unsplash' */}
                <img className="h-screen w-screen" src="https://images.unsplash.com/photo-1597551681492-10c86e481548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover image with description" />
                <div className="absolute w-40 ml-2 mt-5 top-0 left-0 md:w-60 lg:w-80">
                    <h1 className="italic ml-5 text-2xl font-bold underline decoration-wavy text-green-300 text-center">Unsplash</h1>
                    <p className="mt-6 ml-5 text-blue-600 font-extrabold text-xl text-center ">Get over 3 million copyright-free images that can be used for free for personal, commercial, and editorial purposes</p>
                </div>
            </div>
            <div className="w-screen h-screen bg-purple-200">

                <p className="text-red-500">Hope you enjoy</p>
            </div>
        </div>
    )
}

export default CoverImageAndDescription