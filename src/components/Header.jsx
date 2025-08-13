import { useContext, useState } from "react";
import { APP_LOGO_URL, NAV_ITEMS } from "../utils/constants";
import { Link } from "react-router";
import UserContext from "../utils/contexts/UserContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { userName } = useContext(UserContext);

  const clickHandler = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="flex justify-between items-center px-2 py-4 bg-white shadow-sm">
      <div className="logo-container">
        <Link path="/">
          <img alt="Logo" className="w-20" src={APP_LOGO_URL} />
        </Link>
      </div>
      <ul className="flex gap-16 text-md font-semibold text-gray-800">
        {NAV_ITEMS.map((nav) => (
          <li key={nav.navItem}>
            <Link to={nav.path}>{nav.navItem}</Link>
          </li>
        ))}
        <li>
          <button className="button" onClick={() => clickHandler()}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
        <li>User: {userName}</li>
      </ul>
    </div>
  );
};

export default Header;
