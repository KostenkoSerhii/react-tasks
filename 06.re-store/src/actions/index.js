const actionTypes = {
  FETCH_BOOKS_REQUEST: 'FETCH_BOOKS_REQUEST',
  FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ERROR: 'FETCH_BOOKS_ERROR'
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

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested())
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)))
};

export {
  fetchBooks, actionTypes
};