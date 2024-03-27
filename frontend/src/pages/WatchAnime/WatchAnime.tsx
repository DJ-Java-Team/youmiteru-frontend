import "./WatchAnime.scss";
import { useSearchParams } from "react-router-dom";
import { useSeasonDetailsQuery } from "../../hooks/useSeasonDetailsQuery";
import SeasonDetails from "../../components/SeasonDetails";
import { Footer } from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

function WatchAnime () {
    const [searchParams] = useSearchParams();  
    const seasonId = searchParams.get("id"); // We are going to use it for get data about specific season
    const SeasonDetailsQuery = useSeasonDetailsQuery();

    if (SeasonDetailsQuery.isLoading) {
        <h1> Loading ....</h1>;
    }

    if (SeasonDetailsQuery.isError) {
        <h1> Error ....</h1>;
    }


    return (
        <>
            <NavigationBar />
            <SeasonDetails
                season_id={SeasonDetailsQuery.data?.season_id}
                season_image_url={SeasonDetailsQuery.data?.season_image_url}
                season_name={SeasonDetailsQuery.data?.season_name}
                bg_image_url={SeasonDetailsQuery.data?.bg_image_url}
                rating={SeasonDetailsQuery.data?.rating}
                release_date={SeasonDetailsQuery.data?.release_date}
                short_description={SeasonDetailsQuery.data?.season_short_description}
                age_restriction={SeasonDetailsQuery.data?.age_restriction}
                year_season={SeasonDetailsQuery.data?.year_season}
                genres={SeasonDetailsQuery.data?.genres}
            />
            <Footer />
        </>
    );
}

export default WatchAnime;
