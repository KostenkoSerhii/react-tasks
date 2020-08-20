import React, { Component } from 'react';

import SwapiService from 'services/swapi-services';
import Spinner from 'components/spinner';

import './item-list.sass';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
    error: false
  }

  componentDidMount(){
    this.swapiService
      .getAllPeople()
      .then( peopleList => {
        this.setState({
          peopleList
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
    const { peopleList } = this.state;

    if(!peopleList) return <Spinner/>
 
    return (
      <ul className="item-list list-group">
        { this.renderItems(peopleList) }
      </ul>
    );
  }
}
