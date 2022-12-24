import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import App from "./App"
import { AppThemeProvider } from "./contexts/Theme"
import { dark, light } from "./themes"

const AppRoutes = () => {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
            </BrowserRouter>
        </AppThemeProvider>
    )
}

export default AppRoutes