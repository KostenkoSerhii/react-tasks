import updateBookList from './book-list';
import updateShopingCart from './shoping-cart';

const reducer = (state, action) => {
  console.log(action.type)
  return {
    bookList: updateBookList(state, action),
    shopingCart: updateShopingCart(state, action)
  }
}

export default reducer;