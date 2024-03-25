import "./NavigationBar.scss";
import NavBarTop from "./NavBarTop/NavBarTop";
import NavBarBottom from "./NavBarBottom/NavBarBottom";

function NavigationBar (): JSX.Element {
    return (
        <>
            <NavBarTop />
            <NavBarBottom />
        </>
    );
}

export default NavigationBar;
