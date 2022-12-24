import styled from "styled-components"

export const App = styled.div`
	width: 100vw;
	height: 100vh;
	background: ${props => props.theme.theme.colors.mainBg};
	color: ${props => props.theme.theme.colors.textPrimary};
`
