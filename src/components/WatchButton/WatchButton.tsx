import "./WatchButton.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

interface WatchButtonProps {
    isWatchNow?: boolean;
    isWatchTrailer?: boolean;
    season_id: number;
}

function WatchButton({
    isWatchNow = false,
    isWatchTrailer = false,
    season_id,
}: WatchButtonProps) {
    return (
        <>
            {isWatchNow && (
                <Link
                    to={`${ROUTES.SEASON}/${season_id}`}
                    className="watch-button-now">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30%"
                        height="50%"
                        viewBox="0 0 22 21"
                        fill="none">
                        <path
                            d="M0 2.87313C0 0.658533 2.70462 -0.719851 4.85991 0.394617L19.4251 7.93915C21.5626 9.04501 21.5626 11.7874 19.4251 12.8947L4.85991 20.4364C2.70462 21.5523 0 20.1739 0 17.9608V2.87313Z"
                            fill="white"
                        />
                    </svg>
                    <div className="watch-button-now__text">{"Watch Now"}</div>
                </Link>
            )}

            {isWatchTrailer && (
                <Link
                    to={`${ROUTES.TRAILER}/${season_id}`}
                    className="watch-button-trailer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30%"
                        height="50%"
                        viewBox="0 0 22 21"
                        fill="none">
                        <path
                            d="M0 2.87313C0 0.658533 2.70462 -0.719851 4.85991 0.394617L19.4251 7.93915C21.5626 9.04501 21.5626 11.7874 19.4251 12.8947L4.85991 20.4364C2.70462 21.5523 0 20.1739 0 17.9608V2.87313Z"
                            fill="white"
                        />
                    </svg>
                    {"Watch Trailer"}
                </Link>
            )}
        </>
    );
}

export default WatchButton;
