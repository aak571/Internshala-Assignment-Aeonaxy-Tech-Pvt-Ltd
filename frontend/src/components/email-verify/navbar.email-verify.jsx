import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <nav className="flex space-x-80">
            <nav className="mt-3 ml-4 mr-4 space-x-4">
                <label className="italic font-bold cursor-pointer text-2xl underline decoration-wavy text-green-600">Unsplash</label>
                <label className="text-lg cursor-pointer hover:text-orange-500">Inspiration</label>
                <label className="text-lg cursor-pointer hover:text-orange-500">Contributor</label>
                <label className="text-lg cursor-pointer hover:text-orange-500">Learn Photograph</label>
                <label className="text-lg cursor-pointer hover:text-orange-500">Go Pro</label>
                <label className="text-lg cursor-pointer hover:text-orange-500">Hire Photographers</label>
            </nav>

            <nav className="mt-3 flex space-x-4 ml-5 mr-5">
                <input type="text" placeholder=" Search" className="mt-1 h-10 rounded-lg bg-slate-200" />
                <FontAwesomeIcon className="mt-3 text-2xl text-blue-500" icon={faBagShopping} />
                <div className="w-12 h-12 border-2 border-blue-500 rounded-full "></div>
                <button className='mt-1 bg-red-400 w-28 rounded-lg h-10 hover:bg-orange-500 hover:text-white'>Edit Profile</button>
            </nav>
        </nav>
    )
}

export default NavBar