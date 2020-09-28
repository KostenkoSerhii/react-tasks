const booksLoaded = (newsBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newsBooks
  }
}; 
const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED'
  }
}; 

export {
  booksLoaded, booksRequested
}