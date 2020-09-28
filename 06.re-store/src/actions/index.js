const actionTypes = {
  FETCH_BOOKS_REQUEST: 'FETCH_BOOKS_REQUEST',
  FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ERROR: 'FETCH_BOOKS_ERROR',
  BOOK_ADDED_TO_CART: 'BOOK_ADDED_TO_CART',
  BOOK_REMOVE_FROM_CART: 'BOOK_REMOVE_FROM_CART',
  ALL_BOOKS_REMOVE_FROM_CART: 'ALL_BOOKS_REMOVE_FROM_CART',
}

const booksLoaded = (newsBooks) => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    payload: newsBooks
  }
}; 

const booksRequested = () => {
  return {
    type: actionTypes.FETCH_BOOKS_REQUEST
  }
}; 

const booksError = (error) => {
  return {
    type: actionTypes.FETCH_BOOKS_ERROR,
    payload: error
  }
}; 
const bookAddedToCart = (bookId) => {
  return {
    type: actionTypes.BOOK_ADDED_TO_CART,
    payload: bookId
  }
}; 


const bookRemoveFromCart = (bookId) => {
  return {
    type: actionTypes.BOOK_REMOVE_FROM_CART,
    payload: bookId
  }
}; 

const allBooksRemoveFromCart = (bookId) => {
  return {
    type: actionTypes.ALL_BOOKS_REMOVE_FROM_CART,
    payload: bookId
  }
}; 

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested())
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)))
};

export {
  actionTypes,
  fetchBooks, 
  bookAddedToCart,
  bookRemoveFromCart,
  allBooksRemoveFromCart
};