const updateCartItems = (cartItems, newItem, itemIdx) => {
  if (newItem.count === 0) {
    return [...cartItems.slice(0, itemIdx), ...cartItems.slice(itemIdx + 1)];
  }
  if (itemIdx === -1) {
    return [...cartItems, newItem];
  }
  return [
    ...cartItems.slice(0, itemIdx),
    newItem,
    ...cartItems.slice(itemIdx + 1)
  ];
};

const updateCartItem = (oldItem, book, quantity) => {
  if (oldItem) {
    return {
      ...oldItem,
      count: oldItem.count + quantity,
      total: oldItem.total + quantity * book.cost
    };
  } else {
    return {
      id: book.id,
      name: book.name,
      count: 1,
      total: book.cost
    };
  }
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems }
  } = state;
  const book = books.find(({ id }) => id === bookId);
  const idx = cartItems.findIndex(book => book.id === bookId);
  const oldItem = cartItems[idx];

  const newItem = updateCartItem(oldItem, book, quantity);

  return {
    orderTotal: state.shoppingCart.orderTotal + book.cost * quantity,
    orderCount: state.shoppingCart.orderCount + quantity,
    cartItems: updateCartItems(cartItems, newItem, idx)
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      orderCount: 0
    };
  }
  switch (action.type) {
    case "BOOK_ADDED_TO_CART": {
      return updateOrder(state, action.payload, 1);
    }
    case "ALL_BOOKS_DELETED_FROM_CART": {
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);
    }
    case "BOOK_DELETED_FROM_CART": {
      return updateOrder(state, action.payload, -1);
    }
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
