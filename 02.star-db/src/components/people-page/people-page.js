import React, { Component } from 'react';

import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';
import ErrorIndicator from 'components/error-indicator';

import SwapiService from 'services/swapi-services';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();
  
  state = { 
    selectedPerson: null,
    hasError: false
   }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    })
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() { 
    const { selectedPerson, hasError } = this.state;

    if(hasError) return <ErrorIndicator/>
    return ( 
      <div className="row mb-2">
        <div className="col-md-6">
          <ItemList 
          onItemSelected={this.onPersonSelected} 
          getData={this.swapiService.getAllPeople}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    );
  }
}
 
