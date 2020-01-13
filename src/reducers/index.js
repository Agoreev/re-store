const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: "Book 1",
      count: 3,
      total: 150
    },
    {
      id: 2,
      name: "Book 2",
      count: 2,
      total: 100
    }
  ],
  total: 250
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload;
      const addedBook = state.books.find(book => book.id === bookId);
      const newItem = {
        id: addedBook.id,
        name: addedBook.name,
        count: 1,
        total: addedBook.cost
      };
      return {
        ...state,
        cartItems: [...state.cartItems, newItem]
      };
    default:
      return state;
  }
};

export default reducer;
