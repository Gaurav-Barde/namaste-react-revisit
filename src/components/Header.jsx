import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { APP_LOGO_URL, NAV_ITEMS } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const items = useSelector((store) => store.cart.items);

  const clickHandler = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="flex justify-between items-center px-2 py-4 bg-white shadow-sm">
      <div className="logo-container">
        <Link to="/">
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
          <Link to="/cart">Cart-{items.length} items</Link>
        </li>
        <li>
          <button className="button" onClick={() => clickHandler()}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
