import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import "./NavigationBar.scss";
import WebLogo from "@/assets/icons/website-logo.png";
import SearchIcon from "@/assets/icons/search-icon.svg";
import UserProfileIcon from "@/assets/icons/user_icon.svg";

function NavigationBar() {
    return (
        <nav className="navigation-bar">
            <div className="navigation-bar__left-panel">
                <Link to={ROUTES.HOME}>
                    <div className="web-logo">
                        <img src={WebLogo} alt="WebSite Logo" />
                    </div>
                </Link>
            </div>

            <ul className="navigation-bar__center-panel">
                <li>
                    <Link to={ROUTES.HOME}>
                        <div className="home">Главная</div>
                    </Link>
                </li>
                <li>
                    <Link to={ROUTES.CATALOG}>
                        <div className="catalog">Каталог</div>
                    </Link>
                </li>

                <li>
                    <Link to={ROUTES.SPONSOR_PROJECT}>
                        <div className="sponsor-project">Поддержка проекта</div>
                    </Link>
                </li>

                <li>
                    <Link to={ROUTES.HELP}>
                        <div className="help">Обратная связь</div>
                    </Link>
                </li>
            </ul>

            <div className="navigation-bar__right-panel">
                <button className="search">
                    <img src={SearchIcon} alt="Search" />
                </button>

                <Link to={ROUTES.PROFILE}>
                    <button className="user-profile">
                        <img src={UserProfileIcon} className="user-icon" alt="User Profile" />
                    </button>
                </Link>

                <Link to={ROUTES.LOGIN}>
                    <div className="login">Войти</div>
                </Link>
            </div>
        </nav>
    );
}

export default NavigationBar;