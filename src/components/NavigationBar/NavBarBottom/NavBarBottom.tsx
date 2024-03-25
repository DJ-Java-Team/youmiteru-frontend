import "./NavBarBottom.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import BookMarkIcon from "@/assets/icons/bookmark.svg";
import HomeIcon from "@/assets/icons/home.svg";
import CatalogIcon from "@/assets/icons/catalog.svg";

function NavBarBottom(): JSX.Element {
    return (
        <nav className="nav-bar">
            <ul className="nav-bar__list">
                <li>
                    <Link to={ROUTES.HOME} className="nav-bar__link">
                        <img
                            src={HomeIcon}
                            alt="Home Icon"
                            className="nav-bar__icon"
                        />
                        <span className="home">Home</span>
                    </Link>
                </li>

                <li>
                    <Link to={ROUTES.CATALOG} className="nav-bar__link">
                        <img
                            src={CatalogIcon}
                            alt="Catalog Icon"
                            className="nav-bar__icon"
                        />
                        <span className="catalog">Catalog</span>
                    </Link>
                </li>

                <li>
                    <Link to={ROUTES.LIBRARY} className="nav-bar__link">
                        <img
                            src={BookMarkIcon}
                            alt="Library Icon"
                            className="nav-bar__icon"
                        />
                        <span className="library">Library</span>
                    </Link>
                </li>

            </ul>
        </nav>
    );
}

export default NavBarBottom;
