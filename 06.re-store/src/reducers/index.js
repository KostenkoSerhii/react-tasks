
import { actionTypes } from '../actions';
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
  ],
  orderTotal: 300
}
const updateCartItems = (cartItems, item, idx) => {
  
  if(item.count === 0){
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }

  if(idx === -1){
    return [
      ...cartItems,
      item
    ]
  }
  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
};

const updateCartItem = (item = {}, book, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };

};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;
  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex((item) => item.id === bookId);
  const item = cartItems[itemIndex];
  let newItem = updateCartItem(item, book, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
}

const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch(action.type) {
    case actionTypes.FETCH_BOOKS_REQUEST: 
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };

    case actionTypes.FETCH_BOOKS_ERROR:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };

    case actionTypes.BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1)

    case actionTypes.BOOK_REMOVE_FROM_CART:
      return updateOrder(state, action.payload, -1)
    case actionTypes.ALL_BOOKS_REMOVE_FROM_CART:
      const item = state.cartItems.find((item) => item.id === action.payload);
      return updateOrder(state, action.payload, -item.count)

    default: 
      return state;
  }
  
}

export default reducer;