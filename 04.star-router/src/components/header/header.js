import React from 'react';
import PropTypes from 'prop-types';

import './header.sass';

const Header = ({onServiceChange}) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="home">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="People">People</a>
        </li>
        <li>
          <a href="Planets">Planets</a>
        </li>
        <li>
          <a href="Starships">Starships</a>
        </li>
      </ul>
      <button className="btn btn-primary btn-small change"
          onClick={onServiceChange}
        >
        Change Service
      </button>
    </div>
  );
};

Header.propTypes = {
  onServiceChange: PropTypes.func.isRequired
}

export default Header;