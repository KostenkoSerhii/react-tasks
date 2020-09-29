import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import './shop-header.sass';

const ShopHeader = ({ count, total }) => {
  return (
    <header className="shop-header row">

      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {count} items (${total})
        </div>
      </Link>
    </header>
  );
};

ShopHeader.defaultProps = {
  count: 0,
  total: 0
} 

ShopHeader.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}


const mapStateToProps = ({shopingCart: { orderCount, orderTotal }}) => {
  return { 
    count: orderCount,
    total: orderTotal
   }
}

export default connect(mapStateToProps)(ShopHeader);
