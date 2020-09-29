import { actionTypes } from '../actions';

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
  const { bookList: {books}, shopingCart: {cartItems} } = state;
  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex((item) => item.id === bookId);
  const item = cartItems[itemIndex];
  let newItem = updateCartItem(item, book, quantity);

  const newItems = updateCartItems(cartItems, newItem, itemIndex);
  const orderTotal = newItems.reduce((sum, current) => sum + current.total , 0)
  const orderCount = newItems.length;
  return {
    cartItems: newItems,
    orderCount: orderCount,
    orderTotal: orderTotal
  };
};

const updateShopingCart = (state, action) => {

  if(state === undefined){
    return {
      cartItems: [],
      orderTotal: 0
    }
  }

  switch(action.type){
    case actionTypes.BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1)

    case actionTypes.BOOK_REMOVE_FROM_CART:
      return updateOrder(state, action.payload, -1)

    case actionTypes.ALL_BOOKS_REMOVE_FROM_CART:
      const item = state.shopingCart.cartItems.find((item) => item.id === action.payload);
      return updateOrder(state, action.payload, -item.count)
    
    default: 
      return state.shopingCart
  }
}

export default updateShopingCart;