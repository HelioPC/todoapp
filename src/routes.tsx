import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { AppThemeProvider } from "./contexts/Theme"
import Auth from "./pages/Auth"

const AppRoutes = () => {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/sign" element={<Auth />} />
                </Routes>
            </BrowserRouter>
        </AppThemeProvider>
    )
}

export default AppRoutes