import {
    BrowserRouter as Router,
    Routes,    
    Route,
} from "react-router-dom";
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Login } from "../pages/login/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Postagens } from "../pages/postagens/Postagens";


export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pagina-inicial" element={<Dashboard />} />
                <Route path="/Postagens" element={<Postagens />} />
            </Routes>
        </Router>
    )
}