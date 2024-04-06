import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faRightLong } from '@fortawesome/free-solid-svg-icons'

const InputFields = () => {
    return (
        <div>
            {false && <div className="mt-14 ml-96 mr-96">
                <div>
                    <label className='font-bold text-lg'>Add a Profile Pic</label>

                    <div className='flex'>
                        <div className="mt-4 w-28 h-28 border-2 border-blue-500 border-dashed rounded-full ">
                            {/* This is a Font-Awesome-icon */}
                            <FontAwesomeIcon className="mt-10 ml-11 text-2xl text-blue-500" icon={faCamera} />
                        </div>
                        <div className='mt-8 ml-10 flex flex-col'>
                            <input type='file' accept='image/*' className='text-white italic text-sm rounded-lg border-blue-500 border-2 cursor-pointer w-48 bg-green-400' ></input>
                            <div className='flex'>
                                <FontAwesomeIcon className='text-blue-500 mt-3' icon={faRightLong} />
                                <p className='mt-2 ml-2 hover:text-green-500 cursor-pointer'>Or you can choose our defualt avatar</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-14 bg-red-200'>
                        <p className='font-bold text-lg'>Add your Location</p>
                        <input className='mt-5 border-b border-black h-10 w-full focus:outline-none focus:right-0 focus:border-blue-500' placeholder='Enter a location'></input>
                    </div>

                    <div className='mt-14 bg-red-500'>
                        <button className='bg-green-300 text-black w-40 rounded-lg h-10 hover:bg-green-400 hover:text-white'>Next</button>
                    </div>
                </div>
            </div>}

            <div className='mt-4'>
                <h1 className='text-3xl text-center bg-rose-200 font-semibold p-1'>What brings you here ?</h1>
                <p className='text-green-600 text-center'>Please tell what your exactly looking for, so that we can personalise our offerings that best aligns with your needs. You can change the preferences later as well</p>

                <div className='text-center mt-5 ml-5 mr-5 flex space-x-20'>
                    <div className='w-80 rounded-xl'>
                        <img className='rounded-xl w-96 h-80' src="https://images.unsplash.com/photo-1584982442479-16e4ac81adff?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sample image" />
                        <div className='flex mt-3 rounded-xl bg-rose-400 p-1'>
                            <input type="radio" className='w-5 h-6 ml-2  focus:ring-blue-500' />
                            <p className='font-bold mx-auto'>World class high quality images</p>
                        </div>
                    </div>

                    <div className='w-80 rounded-xl'>
                        <img className='rounded-xl w-96 h-80' src="https://plus.unsplash.com/premium_photo-1669077047112-2dff34d1fe8c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sample image" />
                        <div className='flex mt-3 rounded-xl bg-rose-400 p-1'>
                            <input type="radio" className='w-5 h-6 ml-2  focus:ring-blue-500' />
                            <p className='font-bold mx-auto'>Copyright-free images</p>
                        </div>
                    </div>

                    <div className='w-80 rounded-xl'>
                        <img className='rounded-xl w-96 h-80' src="https://images.unsplash.com/photo-1616628188550-808682f3926d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpZHN8ZW58MHx8MHx8fDA%3D" alt="Sample image" />
                        <div className='flex mt-3 rounded-xl bg-rose-400 p-1'>
                            <input type="radio" className='w-5 h-6 ml-2  focus:ring-blue-500' />
                            <p className='font-bold mx-auto'>Category specific images</p>
                        </div>
                    </div>

                    <div className='w-80 rounded-xl'>
                        <img className='rounded-xl w-96 h-80' src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D" alt="Sample image" />
                        <div className='flex mt-3 rounded-xl bg-rose-400 p-1'>
                            <input type="radio" className='w-5 h-6 ml-2  focus:ring-blue-500' />
                            <p className='font-bold mx-auto'>Social Media</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center mt-4'>
                <button className='bg-slate-300 w-20 rounded-lg h-10 hover:bg-slate-400 hover:text-white'>Back</button>
                <button className='ml-5 bg-blue-400 w-28 rounded-lg h-10 hover:bg-green-500 hover:text-white hover:rounded-3xl'>Finish</button>
            </div>
        </div>
    )
}

export default InputFields












{/*  */ }
