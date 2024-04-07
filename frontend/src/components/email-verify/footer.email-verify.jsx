import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faImage } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='mr-20 ml-20  mb-5'>
            <div className='flex'>
                <div className='flex p-2'>
                    <FontAwesomeIcon className="mt-3 text-md text-slate-500" icon={faCopyright} />
                    <p className='mt-3 ml-3 text-xs'>2024 Unsplash, All rights reserved.</p>
                    <p className='mt-3 ml-96 text-xs '>20,501,853 captures unsplashed</p>
                    <FontAwesomeIcon className="text-md mt-3 ml-2 text-green-500" icon={faImage} />
                </div>
            </div>
        </div>
    )
}

export default Footer