import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
        <div id="header-container">
            <div id="logo-container">
            <img id="logo" src={LOGO_URL} alt="logo"/>
        </div>
        <div id="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>

        </div>
        </div>
    );
};

export default Header;