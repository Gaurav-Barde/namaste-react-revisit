import { useState } from "react";
import { APP_LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const clickHandler = () => setIsLoggedin(!isLoggedin);

  return (
    <div className="header">
      <div className="logo-container">
        <img alt="Logo" className="logo" src={APP_LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button className="button" onClick={() => clickHandler()}>
              {isLoggedin ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
