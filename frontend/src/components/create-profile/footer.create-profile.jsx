import { useContext } from 'react'
import { create_profile_context } from '../../react-contexts/contexts/create-profile.context.js'

const FooterOfCreateProfile = () => {
    const { profile_details, set_profile_details } = useContext(create_profile_context)

    const back_onclick_handler = () => {
        set_profile_details({
            ...profile_details, page1_visibility: true, page2_visibility: false, footer_btns_visibility: false
        })
    }

    const finish_onclick_handler = () => {
        console.log('FINISH')
    }

    return (
        <div>
            {profile_details.footer_btns_visibility && <div className='text-center mt-4 mb-4'>
                <button onClick={back_onclick_handler} className='bg-slate-300 w-20 rounded-lg h-10 hover:bg-slate-400 hover:text-white'>Back</button>
                <button onClick={finish_onclick_handler} disabled={!profile_details.what_brings_you_here}
                    className={`ml-5 bg-blue-400 w-28 rounded-lg h-10
                    ${(profile_details.what_brings_you_here) ? 'bg-blue-400 text-black' : 'bg-blue-200 text-slate-400'}
                    hover:${!(profile_details.what_brings_you_here) && 'cursor-not-allowed'}
                    hover:${(profile_details.what_brings_you_here) && 'bg-green-500 hover:text-white hover:rounded-3xl'}
                  `}>Finish</button>
            </div>}
        </div>
    )
}

export default FooterOfCreateProfile