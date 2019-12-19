import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="nav__link nav__link_logo">
        ReStore
      </Link>
      <ul className="nav">
        <li>
          <Link to="/books/" className="nav__link">
            Books
          </Link>
        </li>
        <li>
          <Link to="/cart/" className="nav__link">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
