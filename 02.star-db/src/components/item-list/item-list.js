import React, { Component } from 'react';

import Spinner from 'components/spinner';

import './item-list.sass';

export default class ItemList extends Component {
  state = {
    itemList: null,
    error: false
  }

  componentDidMount(){
    const { getData } = this.props;
      getData()
      .then( itemList => {
        this.setState({
          itemList
        })
      })
      .catch(this.onError)
  }


  onError = err => {
    console.log(`errrroooorr!!!!`)
  }

  renderItems = (arr) => {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
          key={id} 
          onClick={() => this.props.onItemSelected(id)}
          >
          {name}
        </li>
      )
    })
  }

  render() {
    const { itemList } = this.state;

    if(!itemList) return <Spinner/>
 
    return (
      <ul className="item-list list-group">
        { this.renderItems(itemList) }
      </ul>
    );
  }
}
