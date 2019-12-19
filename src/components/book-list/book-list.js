import "./book-list.css";
import React from "react";
import BookListItem from "../book-list-item";
import { withBookstoreService } from "../hoc";
import { connect } from "react-redux";
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";

class BookList extends React.Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    const booksList = books.map(book => {
      return <BookListItem key={book.id} book={book}></BookListItem>;
    });

    return <div className="books-list">{booksList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};
const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
