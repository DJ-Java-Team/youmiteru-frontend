import "./SeasonArrows.scss";
import leftArrow from "../../assets/icons/left-arrow-season.svg";

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
            <img src={leftArrow} alt="left arrow"/>
        </button>
    );
}

export default PrevArrow;
