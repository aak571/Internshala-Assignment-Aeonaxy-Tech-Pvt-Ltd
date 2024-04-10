import { useContext } from 'react'
import { create_profile_context } from '../../react-contexts/contexts/create-profile.context.js'

const InputFieldsPage2 = () => {
    const { profile_details, set_profile_details } = useContext(create_profile_context)

    const what_brings_you_here_onchange_handler = e => {
        set_profile_details({ ...profile_details, what_brings_you_here: e.target.id })
    }

    return (
        <div>
            {profile_details.page2_visibility && <div className='mt-4'>
                <h1 className='text-3xl text-center bg-rose-200 font-semibold p-1'>What brings you here ?</h1>
                <p className='text-green-600 text-center'>Please tell what your exactly looking for, so that we can personalise our offerings that best aligns with your needs. You can change the preferences later as well</p>

                <div className=' mt-5 ml-5 mr-5 lg:flex lg:space-x-20'>

                    <div className='w-80 rounded-xl mx-auto mt-2'>
                        <img className='rounded-xl w-96 h-80' src="https://images.unsplash.com/photo-1584982442479-16e4ac81adff?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sample image" />
                        <div className='flex mt-3 rounded-xl bg-rose-400 p-1'>
                            <input id='World class high quality images' type="radio" onChange={what_brings_you_here_onchange_handler} checked={profile_details.what_brings_you_here === 'World class high quality images'} className='w-5 h-6 ml-2  focus:ring-blue-500' />
                            <p className='font-bold mx-auto'>World class high quality images</p>
                        </div>
                    </div>

                    <div className='w-80 rounded-xl mt-2 mx-auto'>
                        <img className='rounded-xl w-96 h-80 ' src="https://plus.unsplash.com/premium_photo-1669077047112-2dff34d1fe8c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sample image" />
                        <div className='flex mt-3 rounded-xl bg-rose-400 p-1'>
                            <input id='Copyright-free images' type="radio" onChange={what_brings_you_here_onchange_handler} checked={profile_details.what_brings_you_here === 'Copyright-free images'} className='w-5 h-6 ml-2  focus:ring-blue-500' />
                            <p className='font-bold mx-auto'>Copyright-free images</p>
                        </div>
                    </div>

                    <div className='w-80 rounded-xl mx-auto'>
                        <img className='rounded-xl w-96 h-80 text-center' src="https://images.unsplash.com/photo-1616628188550-808682f3926d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpZHN8ZW58MHx8MHx8fDA%3D" alt="Sample image" />
                        <div className='flex mt-3 rounded-xl bg-rose-400 p-1'>
                            <input id='Category specific images' type="radio" onChange={what_brings_you_here_onchange_handler} checked={profile_details.what_brings_you_here === 'Category specific images'} className='w-5 h-6 ml-2  focus:ring-blue-500' />
                            <p className='font-bold mx-auto'>Category specific images</p>
                        </div>
                    </div>

                    <div className='w-80 rounded-xl mx-auto'>
                        <img className='rounded-xl w-96 h-80' src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D" alt="Sample image" />
                        <div className='flex mt-3 rounded-xl bg-rose-400 p-1'>
                            <input id='Images for Social Media' type="radio" onChange={what_brings_you_here_onchange_handler} checked={profile_details.what_brings_you_here === 'Images for Social Media'} className='w-5 h-6 ml-2  focus:ring-blue-500' />
                            <p className='font-bold mx-auto'>Images for Social Media</p>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default InputFieldsPage2