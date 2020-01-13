import React from "react";
import { connect } from "react-redux";
import "./cart.css";

const Cart = ({ items, total, onIncrease, onDecrease, onDelete }) => {
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
            onClick={() => onIncrease(id)}
            className="btn btn_success btn_small margin-r-sm"
          >
            <i className="fa fa-trash"></i>
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn_danger btn_small margin-r-sm"
          >
            <i className="fa fa-plus-circle"></i>
          </button>
          <button
            onClick={() => onDelete(id)}
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
        Total: <b>${total}</b>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: id => {
      console.log(`Increase ${id}`);
    },
    onDecrease: id => {
      console.log(`Decrease ${id}`);
    },
    onDelete: id => {
      console.log(`Delete ${id}`);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
