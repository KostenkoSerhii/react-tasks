import React, {Component} from 'react';

import './item-add-form.sass';

export default class ItemAddForm extends Component{

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
  };

  render(){
    return (
      <form className="item-add-form  d-flex"
        onSubmit={this.onSubmit}
      >
        <input 
            type="text" 
            className="form-control"
            placeholder="write"
            onChange={this.onLabelChange}
          />
        <button 
          className="btn btn-outline-secondary"
          >Add item</button>
      </form>
    );
  };
}