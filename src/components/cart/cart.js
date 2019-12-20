import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <h2>Your order</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Blabla</td>
            <td>3</td>
            <td>90</td>
            <td>
              <button className="btn btn_success btn_small margin-r-sm">
                <i className="fa fa-trash"></i>
              </button>
              <button className="btn btn_danger btn_small margin-r-sm">
                <i className="fa fa-plus-circle"></i>
              </button>
              <button className="btn btn_warning btn_small">
                <i className="fa fa-minus-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total">
        Total: <b>35$</b>
      </div>
    </div>
  );
};
export default Cart;
