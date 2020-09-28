import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withBookstoreService from 'components/hoc';
import { BookListItem } from 'components/book-list-item';
import Spinner from 'components/spinner';

import { booksLoaded, booksRequested } from 'actions';

import { compose } from 'utils';

import './book-list.sass';

const BookList = (props) => {
  
  useEffect(() => {
    console.log(1)
    const { bookstoreService, booksLoaded, booksRequested } = props;
    booksRequested()
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
  }, [])
  
  const {books, loading} = props;
  const listItems = books.map((book) => {
    return(
      <li key={book.id}>
        <BookListItem book={book} />
      </li>
    )
  })

  if(loading){
    return <Spinner/>
  }

  return(
    <ul className="book-list">
      {listItems}
    </ul>
  )
};

const mapStateToProps = ({books, loading}) => {
  return {
    books,
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    booksLoaded,
    booksRequested
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