const booksLoaded = (newsBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newsBooks
  }
}; 

export {
  booksLoaded
}