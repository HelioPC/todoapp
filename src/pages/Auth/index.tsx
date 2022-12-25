import api from "../../api/services"

const Auth = () => {
    const handleLogin = async () => {
        const user = await api.signWithGoogle()
        console.log(user)
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <button onClick={() => handleLogin()}>
                Auth
            </button>
        </div>
    )
}

export default Auth