import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withBookstoreService from 'components/hoc';
import { BookListItem } from 'components/book-list-item';

import { booksLoaded } from 'actions';

import { compose } from 'utils';

import './book-list.sass';

const BookList = (props) => {
  
  useEffect(() => {
    const bookstoreService = props.bookstoreService;
    const data = bookstoreService.getBooks();
    console.log(data)

    props.booksLoaded(data)
  }, [])
  
  const listItems = props.books.map((book) => {
    return(
      <li key={book.id}>
        <BookListItem book={book} />
      </li>
    )
  })
  return(
    <ul>
      {listItems}
    </ul>
  )
};

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    booksLoaded
  }, dispatch)
  // return {
  //   booksLoaded: (newBooks) => {
  //     dispatch(booksLoaded(newBooks))
  //   }
 
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(BookList);