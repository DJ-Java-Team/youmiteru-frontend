import "./Home.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Footer } from "../../components/Footer/Footer";
import BgBanner from "../../components/BgBanner/BgBanner";
import SliderSeasons from "../../components/SliderSeasons/SliderSeasons";
import { useDashBoardQuery } from "../../hooks/useDashBoardQuery";

function Home() {
    const DashBoardQuery = useDashBoardQuery();

    const banners = DashBoardQuery.data?.banners;
    const popular_seasons = DashBoardQuery.data?.popular_seasons;
    const announced_seasons = DashBoardQuery.data?.announced_seasons;
    const released_seasons = DashBoardQuery.data?.released_seasons;

    if (DashBoardQuery.isLoading) {
        <h1> Loading ....</h1>;
    }

    if (DashBoardQuery.isError) {
        <h1> Error ....</h1>;
    }

    return (
        <div className="home">
            <NavigationBar />
            <BgBanner bannerData={banners || []} />
            <SliderSeasons
                title="Popular Seasons"
                sliderData={popular_seasons || []}
            />
            <SliderSeasons
                title="Announced Seasons"
                sliderData={announced_seasons || []}
            />
            <SliderSeasons
                title="Released Seasons"
                sliderData={released_seasons || []}
            />
            <Footer />
        </div>
    );
}

export default Home;
