import React, { Component } from 'react';

import './search-panel.sass';


export default class SearchPanel extends Component{
  state = {
    searchText: ''
  }
  onSearchChange = e => {
    const text = e.target.value;
    this.setState({
      searchText: text
    })
    this.props.onSearchChange(text)
  }
  render(){
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search" 
        onChange={this.onSearchChange}
        value={this.state.searchText}
      />
    );
  }
}