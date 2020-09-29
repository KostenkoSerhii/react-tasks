import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bookAddedToCart, bookRemoveFromCart, allBooksRemoveFromCart } from 'actions';

import './shopping-cart-table.sass';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  const renderRow = (item, idx) => {
    const {id, title, count, total} = item;
    return (
      <tr key={id}>
      <td>{idx + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
      <td>
        <button className="btn btn-outline-danger btn-sm float-right" 
          onClick={() => onDelete(id)}>
          <i className="fa fa-trash-o" />
        </button>
        <button className="btn btn-outline-success btn-sm float-right" 
          onClick={() => onIncrease(id)}>
          <i className="fa fa-plus-circle" />
        </button>
        <button className="btn btn-outline-warning btn-sm float-right" 
          onClick={() => onDecrease(id)}>
          <i className="fa fa-minus-circle" />
        </button>
      </td>
    </tr>
    )
  } 
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">

        <tbody>
        <tr>
          <td>#</td>
          <td>Item</td>
          <td>Count</td>
          <td>Price</td>
          <td>Action</td>
        </tr>

          {items.map(renderRow)}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

ShoppingCartTable.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

const mapStateToProps = ({shopingCart: { cartItems, orderTotal }}) => {
  return {
    items: cartItems, 
    total: orderTotal
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIncrease: (id) => dispatch(bookAddedToCart(id)),
//     onDecrease: (id) => dispatch(bookRemoveFromCart(id)),
//     onDelete: (id) => dispatch(removeAllBooksFromCart(id))
//   }
// }

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBooksRemoveFromCart
}


export default  connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable) ;
