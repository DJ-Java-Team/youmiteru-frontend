import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { useDashBoardQuery } from "./hooks/useDashBoardQuery";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import BgBanner from "./components/BgBanner/BgBanner";
import SliderSeasons from "./components/SliderSeasons/SliderSeasons";

function App() {
    const DashBoardQuery = useDashBoardQuery();

    if (DashBoardQuery.isLoading) {
        <h1> Loading ....</h1>;
    }

    if (DashBoardQuery.isError) {
        <h1> Error ....</h1>;
    }

    const banners = DashBoardQuery.data?.banners;
    const popular_seasons = DashBoardQuery.data?.popular_seasons;
    const announced_seasons = DashBoardQuery.data?.announced_seasons;
    const released_seasons = DashBoardQuery.data?.released_seasons;

    return (
        <BrowserRouter>
            <Routes>
                {/* We will create our pages later it's just an example */}
                <Route 
                    path={ROUTES.HOME} 
                    element={<>
                            <NavigationBar />
                            <BgBanner 
                                bannerData={banners || []} />

                            <SliderSeasons 
                                title="Popular" 
                                sliderData={popular_seasons || []} />

                            <SliderSeasons 
                                title="Announced" 
                                sliderData={announced_seasons || []} />

                            <SliderSeasons 
                                title="Released" 
                                sliderData={released_seasons || []} />
                        </>} 
                />

                <Route 
                    path={ROUTES.HELP}
                    element={<h1>Help Page</h1>} 
                />
                
                <Route 
                    path="*" 
                    element={<h1>!Undefined Page! please come back at main page</h1>} 
                /> 
            </Routes>  
        </BrowserRouter>
    );
}

export default App;
