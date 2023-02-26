import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { AppThemeProvider } from "./contexts/Theme"
import { UserProvider } from "./contexts/User"
import Auth from "./pages/Auth"
import ProtectedRoute from "./pages/ProtectedRoute"
import Todo from "./pages/Todo"

const AppRoutes = () => {
    return (
        <AppThemeProvider>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/sign" element={<Auth />} />
                        <Route path="/app" element={<ProtectedRoute />}>
                            <Route path="/app" element={<Todo />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </AppThemeProvider>
    )
}

export default AppRoutes