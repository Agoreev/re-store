import "./book-list.css";
import React from "react";
import BookListItem from "../book-list-item";
import { withBookstoreService } from "../hoc";
import { connect } from "react-redux";
import { fetchBooks, bookAddedToCart } from "../../actions";
import ErrorIndicator from "../error-indicator";
import { compose } from "../../utils";
import Spinner from "../spinner";

const BookList = ({ books, onAddedToCart }) => {
  const booksList = books.map(book => {
    return (
      <BookListItem
        key={book.id}
        book={book}
        onAddedToCart={() => onAddedToCart(book.id)}
      ></BookListItem>
    );
  });
  return <div className="books-list">{booksList}</div>;
};

class BookListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return {
    books,
    loading,
    error
  };
};
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: id => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
