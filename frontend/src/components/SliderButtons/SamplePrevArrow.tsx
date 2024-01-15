import "./SliderButton.scss";

interface SamplePrevArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function SamplePrevArrow({ onClick }: SamplePrevArrowProps) {
    
    return (
        <div className="Slider-arrow Slider-arrow-left" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.76219 5.82043L3.76219 18.1804M20.2422 16.7804L20.2422 7.21043C20.2422 5.25043 18.1122 4.02043 16.4122 5.00043L12.2622 7.39043L8.11219 9.79043C6.41219 10.7704 6.41219 13.2204 8.11219 14.2004L12.2622 16.6004L16.4122 18.9904C18.1122 19.9704 20.2422 18.7504 20.2422 16.7804Z" stroke="white"/>
            </svg>
        </div>
    );
}

export default SamplePrevArrow;