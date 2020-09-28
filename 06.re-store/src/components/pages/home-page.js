import React from 'react';

import BookList from 'components/book-list';
import ShoppingCartTable from 'components/shopping-cart-table';

const HomePage = () => {
  return (
    <div>
        <BookList />
        <ShoppingCartTable/>
    </div>
  )
}

export default HomePage;