import GoogleTermsAndConditions from "./google-terms-and-conditions.create-accout"
import TermsOfService from "./terms-of-service.create-account"

const InputFields = () => {
    return (
        <div className="ml-60 mr-60 bg-red-100 mt-10">

            <div className="md:flex md:justify-between ">
                <div className="flex flex-col bg-yellow-200 w-64">
                    <label className="font-bold bg-blue-200 text-start">Name</label>
                    <input className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
                </div>

                <div className="flex flex-col bg-yellow-200 w-64">
                    <label className="font-bold bg-blue-200 text-start">Username</label>
                    <input className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
                </div>
            </div>

            <div className="flex flex-col mt-7 bg-yellow-200">
                <label className="font-bold bg-blue-200 text-start">Email</label>
                <input className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
            </div>

            <div className="flex flex-col mt-7 bg-yellow-200">
                <label className="font-bold bg-blue-200 text-start">Password</label>
                <input type="password" className="bg-slate-100 rounded-lg h-11 text-center mt-2 border-1  hover:bg-slate-200 focus:outline-none focus:right-0 focus:border focus:border-blue-500" placeholder="............."></input>
            </div>

            <TermsOfService />

            <div className="bg-slate-600 mt-7">
                <button className="bg-blue-500 text-white p-2 rounded-lg w-40 hover:bg-green-300 hover:text-black hover:rounded-full">Create Account</button>
            </div>

            <GoogleTermsAndConditions/>

        </div>
    )
}

export default InputFields