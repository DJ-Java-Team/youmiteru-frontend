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
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        swipe: true,
    };

    const settings: SliderSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        swipe: false,
        adaptiveHeight: false,
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
                                key={item.seasonId}
                                to={`${ROUTES.SEASON}?id=${item.seasonId}`}>
                                <div className="slider-season__card">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.seasonName}
                                    />
                                    <div className="card_season_name">
                                        {item.seasonName}
                                    </div>

                                    <div className="card_season_description">
                                        {item.description}
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
