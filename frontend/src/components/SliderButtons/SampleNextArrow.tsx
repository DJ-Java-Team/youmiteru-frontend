import "./SliderButton.scss";

interface SampleNextArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function SampleNextArrow({ onClick }: SampleNextArrowProps) {
    
    return (
        <div onClick={onClick} className="Slider-arrow Slider-arrow-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.2398 18.1796L20.2398 5.81957M3.75977 7.21957L3.75977 16.7896C3.75977 18.7496 5.88977 19.9796 7.58977 18.9996L11.7398 16.6096L15.8898 14.2096C17.5898 13.2296 17.5898 10.7796 15.8898 9.79957L11.7398 7.39957L7.58977 5.00957C5.88977 4.02957 3.75977 5.24957 3.75977 7.21957Z" stroke="white" />
            </svg>
        </div>
    );
}

export default SampleNextArrow;