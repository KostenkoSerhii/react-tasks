import React, { Component } from 'react';

import ItemList from 'components/item-list';
import ItemDetails, { Record } from 'components/item-details';
import ErrorBoundry from 'components/error-boundry';
import Row from 'components/row';

import SwapiService from 'services/swapi-services';

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
          getImageUrl={this.swapiService.getPersonImage}
          >
          <Record field="gender" label="Gender"/>
          <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
      </ErrorBoundry>
    )
    
    return ( 
        <Row left={items} right={personDetails}  />
    );
  }
}
 
