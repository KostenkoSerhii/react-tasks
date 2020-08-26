import React, { Component } from 'react';
import ErrorBoundry from 'components/error-boundry';
import Row from 'components/row';

import SwapiService from 'services/swapi-services';
import { PersonList, PersonDetails } from 'components/sw-components';

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
      <PersonList onItemSelected={this.onPersonSelected}>
        { i => `${i.name} (${i.birthYear})`}
      </PersonList>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails itemId={selectedPerson}/>
      </ErrorBoundry>
    )
    
    return ( 
        <Row left={items} right={personDetails}  />
    );
  }
}
 
