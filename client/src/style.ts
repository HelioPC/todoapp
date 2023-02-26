import styled from "styled-components"
import tw from "tailwind-styled-components"

export const App = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background: ${props => props.theme.theme.colors.mainBg};
	color: ${props => props.theme.theme.colors.textPrimary};

	ul li a {
		color: ${props => props.theme.theme.colors.textPrimary};
	}
`

export const AppHeader = tw.header`
	h-20 w-full py-5 sm:px-[60px] px-3 flex justify-between items-center bg-transparent
`

export const AppBody = tw.div`
	w-full h-[calc(100vh-80px)] py-[50px] overflow-y-scroll flex flex-[1_1_auto] items-center justify-center
`

export const AppButton = styled.a`
	background: ${props => props.theme.theme.colors.primary};
	color: #FFF;
	font-weight: 700;
	padding: 14px 45px;
	border-radius: 2px;
	border: 0;
	box-shadow: 0px 2px 4px -0.7px rgb(0 0 0 / 25%);
`
