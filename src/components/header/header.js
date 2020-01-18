import React from "react";
import "./header.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ orderTotal, orderCount }) => {
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
        {orderCount} items (${orderTotal})
      </Link>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { orderTotal, orderCount } }) => {
  return {
    orderTotal: orderTotal,
    orderCount: orderCount
  };
};

export default connect(mapStateToProps)(Header);
