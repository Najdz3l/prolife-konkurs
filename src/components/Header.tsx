import { Link } from "react-router-dom";

import proLifeLogo from "../assets/images/ProLifeLogo.png";

const Header = () => {
  return (
    <header id="header">
      <nav>
            <ul>
                <li>
                  <Link to="/" className="header__homepage-button">
                    <img src={proLifeLogo} alt="Pro-Life Logo" className="header__logo" />
                    <span>Pro Life</span>
                  </Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                    <span>|</span>
                    <Link to="/topics">Tematy</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
