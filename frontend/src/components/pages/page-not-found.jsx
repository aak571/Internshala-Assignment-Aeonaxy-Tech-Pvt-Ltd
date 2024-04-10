import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate()

    const home_onclick_handler = () => {
        navigate('/')
    }

    return (
        <div>
            <h1 className="underline decoration-double text-3xl mx-auto p-5 font-bold text-slate-400 italic text-center bg-slate-200">404 - Unsplash doesn't have anything to say to this URL route</h1>
            <p className="mt-10 text-center text-lg">Please head to <span onClick={home_onclick_handler} className=' text-violet-600 hover:underline cursor-pointer'>Home</span> page</p>
        </div>
    )
}

export default PageNotFound