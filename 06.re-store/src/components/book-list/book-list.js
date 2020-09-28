import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import withBookstoreService from 'components/hoc';
import { BookListItem } from 'components/book-list-item';
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';

import { fetchBooks } from 'actions';

import { compose } from 'utils';

import './book-list.sass';

const BookListContainer = (props) => {
  
  useEffect(() => {
    props.fetchBooks()
  }, [])
  
  const {books, loading, error} = props;


  if(loading){
    return <Spinner/>
  }
  if(error){
    return <ErrorIndicator/>
  }

  return <BookList books={books}/>;
};

const BookList = ({books}) => {
  const listItems = books.map((book) => { 
    return(
      <li key={book.id}>
        <BookListItem book={book} />
      </li>
    )
  })
  return (
    <ul className="book-list">
    { listItems}
    </ul>
  )
}

const mapStateToProps = ({books, loading, error}) => {
  return {
    books,
    loading,
    error
  }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(BookListContainer);