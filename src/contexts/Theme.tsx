import { ReactNode, useContext, useState } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { dark, light } from '../themes';

type AppThemeProps = {
    children: ReactNode;
}

export const AppThemeProvider = ({ children }: AppThemeProps) => {
    const [theme, setTheme] = useState(light)

    const dispatch = {
        switchTheme: () => {
            setTheme(theme.name === 'light' ? dark : light)
        }
    }

    const value = { theme, dispatch }
    
    return (
        <ThemeProvider theme={value}>
            {children}
        </ThemeProvider>
    )
}

export const useAppTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
}
