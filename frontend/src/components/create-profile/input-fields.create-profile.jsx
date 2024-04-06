import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faRightLong } from '@fortawesome/free-solid-svg-icons'

const InputFields = () => {
    return (
        <div className="mt-14 ml-96 mr-96 ">
            <label className='font-bold text-lg'>Add a Profile Pic</label>
            <div className='flex'>
                <div className="mt-4 w-28 h-28 border-2 border-blue-500 border-dashed rounded-full ">
                    {/* This is a Font-Awesome-icon */}
                    <FontAwesomeIcon className="mt-10 ml-11 text-2xl text-blue-500" icon={faCamera} />
                </div>
                <div className='mt-5 ml-10 flex flex-col'>
                    <input type='file' accept='image/*' className='text-white italic text-sm rounded-lg border-blue-500 border-2 cursor-pointer w-48 bg-green-400' ></input>
                    <div className='flex'>
                        <FontAwesomeIcon className='text-blue-500 mt-3' icon={faRightLong} />
                        <p className='mt-2 ml-2 hover:text-green-500 cursor-pointer'>Or you can choose our defualt avatar</p>
                    </div>
                </div>
            </div>
            <div className='mt-14 bg-red-200'>
                <p className='font-bold text-lg'>Add your Location</p>
                <input className='mt-5 underline focus:border-none focus:right-0' placeholder='Enter a location'></input>
            </div>
        </div>
    )
}

export default InputFields












{/*  */ }
