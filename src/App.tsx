import { useEffect, useState } from "react"
import Switch from "react-switch"
import { BsAlarm } from 'react-icons/bs'

import { useAppTheme } from './contexts/Theme'
import * as C from './style'
import logo from './assets/images/logo.png'
import left from './assets/images/home01.png'
import right from './assets/images/home02.png'
import center from './assets/images/home03.png'

const App = () => {
	const { dispatch, theme } = useAppTheme()
	const [checked, setChecked] = useState(theme.name === 'light')

	useEffect(() => {
		setChecked(theme.name === 'light')
	}, [theme])

	return (
		<C.App>
			<C.AppHeader>
				<img src={logo} alt="logo" className='h-full' />
				
				<ul className='flex gap-10'>
					<li>
						<Switch
							height={20}
							width={40}
							onChange={() => dispatch.switchTheme()}
							checked={checked}
							checkedIcon={false}
							uncheckedIcon={false}
						/>
					</li>
					<li>
						<a href="/">
							Sign in
						</a>
					</li>
				</ul>
			</C.AppHeader>
			<C.AppBody>
				<img src={left} alt="home-img" className="h-[458px] p-16 lg:block hidden" />
				<div className="flex flex-col items-center justify-center">
					<div className="flex flex-col items-center gap-10">
						<img src={logo} alt="logo" className='h-[80px] w-[100px]' />
						<h1 className="text-center text-[42px] font-thin">To Do APP</h1>
						<p className="text-center text-xl lg:block hidden">Seja trabalho ou lazer, o To Do facilita-lhe a vida.</p>
						<img src={center} alt="home-img" className="lg:hidden block h-[183px]" />
					</div>
					<div className="pt-5 pb-[60px] flex justify-center">
						<C.AppButton>
							Começar já
						</C.AppButton>
					</div>
				</div>
				<img src={right} alt="home-img" className="h-[458px] p-16 lg:block hidden" />
			</C.AppBody>
		</C.App>
	)
}

export default App
