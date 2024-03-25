import { Link } from "react-router-dom";

import "./Footer.scss";

import vk from "./../../assets/icons/vk-logo.png";
import discord from "./../../assets/icons/discord-logo.png";
import telegram from "./../../assets/icons/telegram-logo.png";

import { links } from "../../constants/misc";
import { ROUTES } from "../../constants/routes";

export function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <div className="footer__first-part">
                <Link
                    className="footer__first-part__logo-text"
                    to={ROUTES.HOME}
                >
                    youmiteru
                </Link>
                <div className="footer__first-part__icons">
                    <Link to={links.discord_link}>
                        <img src={discord} />
                    </Link>
                    <Link to={links.vk_link}>
                        <img src={vk} />
                    </Link>
                    <Link to={links.telegram_link}>
                        <img src={telegram} />
                    </Link>
                </div>
            </div>
            <div className="footer__second-part">
                <h1>О нас</h1>
                <ul>
                    <li>
                        <Link
                            className="footer-custom-link"
                            to={ROUTES.USER_AGREEMENT}
                        >
                            Пользовательское соглашение
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="footer-custom-link"
                            to={ROUTES.PRIVACY_POLICY}
                        >
                            Политика конфиденциальности
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer__block">
                <div className="footer__block__third-part">
                    <h1>Помощь</h1>
                    <ul>
                        <li>
                            <Link
                                className="footer-custom-link"
                                to={ROUTES.FAQ}
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="footer-custom-link"
                                to={ROUTES.CONTACTS}
                            >
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__block__four-part">
                    <h1>Другое</h1>
                    <ul>
                        <li>
                            <Link
                                className="footer-custom-link"
                                to={ROUTES.SPONSOR_PROJECT}
                            >
                                Донат
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="footer-custom-link"
                                to={ROUTES.COMPLAINT}
                            >
                                Жалоба
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="footer-custom-link"
                                to={ROUTES.ADVERTISMENT}
                            >
                                Реклама
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
