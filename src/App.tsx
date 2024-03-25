import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path={ROUTES.HOME} 
                    element={<Home />} 
                />

                <Route 
                    path={ROUTES.HELP}
                    element={<h1>Help Page</h1>} 
                />
                
                <Route 
                    path={ROUTES.PROFILE}
                    element={<User />} 
                /> 
            </Routes>  
        </BrowserRouter>
    );
}

export default App;
