export interface ResponsiveSliderSettings {
    infinite?: boolean;
    slidesToShow?: number;
    slidesToScroll?: number;
    focusOnSelect?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
}

interface ResponsiveSettings {
    breakpoint: number;
    settings: ResponsiveSliderSettings;
}

export interface SliderSettings {
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    centerMode?: boolean;
    centerPadding?: string;
    beforeChange?: (current: number, next: number) => void;
    nextArrow?: JSX.Element;
    prevArrow?: JSX.Element;
    responsive?: ResponsiveSettings[];
}
