import "./SliderBanner.scss";
import Slider from "react-slick";
import { useState } from "react";
import NextArrow from "../BannerArrows/NextArrow";
import PrevArrow from "../BannerArrows/PrevArrow";
import { Banner } from "../../types/Banner";
import {
    ResponsiveSliderSettings,
    SliderSettings,
} from "../../types/SliderSettings";

interface SliderBannerProps {
    bannerData: Banner[];
    onSlideChange?: (index: number) => void;
}

function SliderBanner({
    bannerData,
    onSlideChange,
}: SliderBannerProps): JSX.Element {
    const [slideIndex, setSlideIndex] = useState(0);

    const ResponsiveSliderSettings: ResponsiveSliderSettings = {
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
    };

    const settings: SliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        beforeChange: (_, next) => {
            setSlideIndex(next);
            if (onSlideChange) {
                onSlideChange(next);
            }
        },
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: ResponsiveSliderSettings,
            },
        ],
    };

    return (
        <div className="slider-banner">
            <Slider {...settings}>
                {bannerData &&
                    bannerData.map((img, index) => (
                        <div
                            className={
                                index === slideIndex
                                    ? "slider-banner__slide slider-banner__slide-active"
                                    : "slider-banner__slide"
                            }
                            key={index}
                        >
                            <img
                                src={img.season_image_url}
                                alt="slider picture"
                            />
                        </div>
                    ))}
            </Slider>
        </div>
    );
}

export default SliderBanner;
