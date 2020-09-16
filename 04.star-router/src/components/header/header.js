import React from 'react';
import PropTypes from 'prop-types';

import './header.sass';

import { Link } from 'react-router-dom';

const Header = ({onServiceChange}) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          Star DB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
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