import InputFields from "./input-fields.create-account.jsx"

const CreateAccountForm = () => {
    return (
        <div>
            <h1 className="font-extrabold text-3xl mt-5 ml-60 mr-60">Sign up to <span className="italic underline decoration-wavy">Unsplash</span></h1>
            <p className="text-sm mt-5 ml-60 mr-60">* All the alerts goes here !!!</p>
            <InputFields />
        </div>
    )
}

export default CreateAccountForm