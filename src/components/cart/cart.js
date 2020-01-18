import React from "react";
import { connect } from "react-redux";
import {
  bookDeletedFromCart,
  allBooksDeletedFromCart,
  bookAddedToCart
} from "../../actions";
import "./cart.css";

const Cart = ({ items, orderTotal, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn_danger btn_small margin-r-sm"
          >
            <i className="fa fa-trash"></i>
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn_success btn_small margin-r-sm"
          >
            <i className="fa fa-plus-circle"></i>
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn_warning btn_small"
          >
            <i className="fa fa-minus-circle"></i>
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="cart">
      <h2>Your order</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">
        Total: <b>${orderTotal}</b>
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    orderTotal: orderTotal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrease: id => dispatch(bookAddedToCart(id)),
    onDecrease: id => dispatch(bookDeletedFromCart(id)),
    onDelete: id => dispatch(allBooksDeletedFromCart(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
