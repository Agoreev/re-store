import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ numItems, total }) => {
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
        <li></li>
      </ul>

      <Link to="/cart/" className="nav__link nav__link_cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </Link>
    </div>
  );
};

export default Header;
