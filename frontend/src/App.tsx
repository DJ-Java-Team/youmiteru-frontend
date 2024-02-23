import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Login from "./pages/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path={ROUTES.HOME} 
                    element={<Home />} 
                />

                <Route 
                    path={ROUTES.CATALOG} 
                    element={<Catalog />} 
                />

                <Route 
                    path={ROUTES.HELP} 
                    element={<h1>Help Page</h1>} 
                />

                <Route
                    path="*"
                    element={
                        <h1>!Undefined Page! please come back at main page</h1>
                    }
                />

                <Route
                    path={ROUTES.LOGIN} 
                    element={<Login />} 
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
