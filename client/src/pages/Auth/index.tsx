import { FcGoogle } from "react-icons/fc"

import { useAppTheme } from "../../contexts/Theme"
import * as L from "./style"
import logo from '../../assets/images/logo.png'
import { useEffect, useState } from "react"
import { fakeApiUsers, UserStorageName } from "../../assets/dummy"
import { UserActions, useUser } from "../../contexts/User"
import { useNavigate } from "react-router-dom"

const Auth = () => {
    const { dispatch, validUser } = useUser()
    const { theme } = useAppTheme()
    const [email, setEmail] = useState('')
    const [password, setPAssword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if(validUser) navigate('/app')
    }, [])
    
    const handleLogin = async () => {
        if(email === '' || password === '') {
            return
        }

        else {
            const authUser = fakeApiUsers.find((u) => u.email === email && u.password === password)

            if(authUser) {
                dispatch({
                    type: UserActions.setUser,
                    payload: authUser
                })
                localStorage.setItem(UserStorageName, JSON.stringify(authUser))
                navigate('/app')
            }
        }
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
                                <L.AuthFormInput
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="" className="text-sm font-semibold">
                                    Password
                                </label>
                                <L.AuthFormInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPAssword(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="" />
                                    <label htmlFor="" className="text-sm">Remember for 30 days</label>
                                </div>
                                <a href="/" className="text-sm" style={{ color: `${theme.colors.textLink}` }}>Forgot password</a>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <L.AuthFormButton
                                    style={{
                                        backgroundColor: `${theme.colors.primary}`,
                                        color: 'white'
                                    }}
                                    onClick={async () => await handleLogin()}
                                >
                                    <span>Sign in</span>
                                </L.AuthFormButton>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-sm">
                                    Don't have an account <a href="/" style={{ color: `${theme.colors.textLink}` }}>Sign up</a>
                                </p>
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