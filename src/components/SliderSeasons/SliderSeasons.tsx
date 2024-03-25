import Slider from "react-slick";
import "./SliderSeasons.scss";
import NextArrow from "../SeasonArrows/NextArrow";
import PrevArrow from "../SeasonArrows/PrevArrow";
import { Season } from "../../types/Season";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { SliderSettings, ResponsiveSliderSettings } from "../../types/SliderSettings";

interface SliderSeasonsProps {
    sliderData: Season[] | [];
    onSlideChange?: (index: number) => void;
    title: string;
}

function SliderSeasons({ sliderData, title }: SliderSeasonsProps) {
    const ResponsiveSliderSettings: ResponsiveSliderSettings = {
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    };

    const settings: SliderSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 600,
                settings: ResponsiveSliderSettings,
            },
        ],
    };

    return (
        <div className="slider-seasons">
            <SectionTitle title={title} />
            <div className="slider-season">
                <Slider {...settings}>
                    {sliderData &&
                        sliderData.map((item) => (
                            <Link
                                className="slider-season__link"
                                key={item.season_id}
                                to={`${ROUTES.SEASON}/${item.season_id}`}>
                                <div className="slider-season__card">
                                    <img
                                        src={item.season_image_url}
                                        alt={item.season_name}
                                    />
                                    <div className="card_season_name">
                                        {item.season_name}
                                    </div>

                                    <div className="card_season_description">
                                        {item.season_description}
                                    </div>
                                </div>
                            </Link>
                        ))}
                </Slider>
            </div>
        </div>
    );
}

export default SliderSeasons;
