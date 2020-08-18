import React, { Component } from 'react';

import classNames from 'classnames';

import { params } from 'consts';

import './item-status-filter.sass';

export default class ItemStatusFilter extends Component{
  buttons = [
    {name: params.all, label: 'all'},
    {name: params.active, label: 'Active'},
    {name: params.done, label: 'Done'}
  ]
  render(){
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;

      const classes = classNames({
        'btn-info': isActive,
        'btn-outline-secondary': !isActive
      });

      return (
        <button type="button"
          className={`btn ${classes}`}
          key={name}
          onClick={() => {onFilterChange(name)}}
          >{label}</button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
};