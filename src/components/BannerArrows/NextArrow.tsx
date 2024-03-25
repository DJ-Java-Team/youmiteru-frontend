import "./SliderButton.scss";
import rightArrow from "../../assets/icons/right-arrow.svg";

interface NextArrowProps {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function NextArrow({ className, onClick }: NextArrowProps): JSX.Element {
    return (
        <button
            className={`slider-arrow ${className}`}
            onClick={onClick}
        >
            <img src={rightArrow} alt="right arrow" />
        </button>
    );
}

export default NextArrow;
