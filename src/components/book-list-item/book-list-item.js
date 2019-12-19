import React from "react";
import "./book-list-item.css";
import { Link } from "react-router-dom";

const BookListItem = ({ book }) => {
  const { id, title, author, img, cost } = book;
  return (
    <div className="book" key={id}>
      <img className="book__img" src={img} alt={title} />
      <div className="book__description">
        <Link className="book__name" to={`/books/${id}`}>
          {title}
        </Link>
        <span className="book__author">by {author}</span>
        <span className="book__cost">
          <b>{cost}</b>
        </span>
        <button className="book__bye-btn btn btn_main">Add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
