import React from "react";
import "./books-page.css";
import BookList from "../book-list";
import Cart from "../cart";

const BooksPage = () => {
  return (
    <React.Fragment>
      <BookList />
      <Cart />
    </React.Fragment>
  );
};

export default BooksPage;
