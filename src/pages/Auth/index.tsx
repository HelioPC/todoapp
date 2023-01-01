import { FcGoogle } from "react-icons/fc"

import api from "../../api/services"
import { useAppTheme } from "../../contexts/Theme"
import * as L from "./style"
import logo from '../../assets/images/logo.png'

const Auth = () => {
    const { theme } = useAppTheme()
    
    const handleLogin = async () => {
        const result = await api.signWithGoogle()

        if(result) console.log('User added')
        else console.log('Fail')
    }

    return (
        <L.AuthScreen>
            <L.AuthBody>
                <L.AuthLeft
                    background={theme.colors.mainBg}
                >
                    <L.AuthForm>
                        <div className="flex flex-col gap-5 min-w-[50%]">
                            <h1>Welcome back</h1>
                            <span className="text-[#666]">Welcome back! Please enter your details.</span>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="" className="text-sm font-semibold">
                                    Email
                                </label>
                                <L.AuthFormInput type="email" name="" placeholder="E-mail" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="" className="text-sm font-semibold">
                                    Password
                                </label>
                                <L.AuthFormInput type="password" name="" placeholder="Password" />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="" />
                                    <label htmlFor="" className="text-sm">Remember for 30 days</label>
                                </div>
                                <a href="" className="text-sm">Forgot password</a>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <L.AuthFormButton
                                    href=""
                                    style={{
                                        backgroundColor: `${theme.colors.primary}`,
                                        color: 'white'
                                    }}
                                >
                                    Sign in
                                </L.AuthFormButton>
                                <L.AuthFormButton
                                    style={{
                                        border: '1px solid #999999',
                                        color: `${theme.colors.textPrimary}`
                                    }}
                                    onClick={() => handleLogin()}
                                >
                                    <FcGoogle size={20} className="mr-3" />
                                    Sign in with Google
                                </L.AuthFormButton>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-sm">Don't have an account <a href="/">Sign up</a></p>
                            </div>
                        </div>
                    </L.AuthForm>
                </L.AuthLeft>
                <L.AuthRight
                    background={theme.colors.sideBarLabelBg}
                >
                    <img src={logo} alt="logo" className="w-44" />
                    <div
                        className="absolute w-full h-1/2 bottom-0 left-0 right-0
                        shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                        backdrop-blur
                        "
                        style={{
                            background: `${theme.colors.mainBg}00`
                        }}
                    />
                </L.AuthRight>
            </L.AuthBody>
        </L.AuthScreen>
    )
}

export default Auth