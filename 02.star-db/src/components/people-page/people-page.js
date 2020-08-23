import React, { Component } from 'react';

import ItemList from 'components/item-list';
import ItemDetails from 'components/item-details';
import ErrorBoundry from 'components/error-boundry';

import SwapiService from 'services/swapi-services';

import Row from 'components/row';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();
  
  state = { 
    selectedPerson: null
   }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    })
  }

  render() { 
    const { selectedPerson } = this.state;

    const items = (
      <ItemList 
      onItemSelected={this.onPersonSelected} 
      getData={this.swapiService.getAllPeople}>
        { i => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails 
          itemId={selectedPerson} 
          getData={this.swapiService.getPerson}
          />
      </ErrorBoundry>
    )
    
    return ( 
        <Row left={items} right={personDetails}  />
    );
  }
}
 
