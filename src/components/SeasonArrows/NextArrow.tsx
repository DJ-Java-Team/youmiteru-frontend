import "./SeasonArrows.scss";
import rightArrow from "../../assets/icons/right-arrow-season.svg";

interface NextArrowProps {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function NextArrow({ className, onClick }: NextArrowProps) {
    return (
        <button
            className={`slider-arrow ${className}`}
            onClick={onClick}
        > 
            <img src={rightArrow} alt="right arrow"/>
        </button>
    );
}

export default NextArrow;
