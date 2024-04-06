const TermsOfService = () => {
    return (
        <div className="flex mt-3">
            <input type="checkbox" className="h-7 w-7 bg-green-500 text-center"></input>
            <p className="ml-2">Creating an account means you're okay with our <span className="text-sm text-violet-700 hover:underline cursor-pointer">Terms of Service</span>, <span className="text-violet-700 hover:underline cursor-pointer">Privacy Policy</span>, and our default <span className="text-violet-700 hover:underline cursor-pointer">Notification Settings</span>.</p>
        </div>
    )
}

export default TermsOfService