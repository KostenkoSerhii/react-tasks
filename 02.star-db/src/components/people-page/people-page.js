import React, { Component } from 'react';

import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';
import ErrorIndicator from 'components/error-indicator';
import Row from 'components/row';

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

    const items = (
      <ItemList 
      onItemSelected={this.onPersonSelected} 
      getData={this.swapiService.getAllPeople}
      renderItem={ ({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
      />
    );

    const personDetails = <PersonDetails personId={selectedPerson} />;
    
    return ( 
      <Row left={items} right={personDetails}  />
    );
  }
}
 
