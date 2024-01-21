import "./SliderButton.scss";
import leftArrow from "../../assets/images/left-arrow.svg";

interface PrevArrowProps {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function PrevArrow({ className, onClick }: PrevArrowProps) {

    return (
        <button
            className={`slider-arrow ${className}`}
            onClick={onClick}
        >
            <img src={leftArrow} alt="left arrow" />
        </button>
    );
}

export default PrevArrow;
