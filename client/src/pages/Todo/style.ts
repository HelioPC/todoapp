import styled from "styled-components"

export interface ThemeProps {
    background: string;
}

export const TodoScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.theme.colors.mainBg};
    color: ${props => props.theme.theme.colors.textPrimary};
`
