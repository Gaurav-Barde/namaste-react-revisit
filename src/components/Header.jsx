import { useState } from "react";
import { APP_LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clickHandler = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="header">
      <div className="logo-container">
        <img alt="Logo" className="logo" src={APP_LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button className="button" onClick={() => clickHandler()}>
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
